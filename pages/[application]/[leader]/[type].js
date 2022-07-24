import Error from 'next/error'
import {
  Box,
  Input,
  Card,
  Container,
  Text,
  Button,
  Flex,
  Select,
  Textarea,
  Field,
} from 'theme-ui'
import Icon from '@hackclub/icons'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import manifest from '../../../manifest'
import nookies from 'nookies'
import { useRouter } from 'next/router'
import {
  returnLocalizedMessage,
  returnLocalizedQuestionText,
  handleChangeInDate
} from '../../../lib/helpers'
import TimelineCard from '../../../components/Timeline'

export default function ApplicationClub({
  notFound,
  applicationsRecord,
  leaderRecord,
  trackerRecord,
  params
}) {
  const [data, setData] = useState( params.type === 'club' ? applicationsRecord.fields : leaderRecord.fields )
  const [saved, setSavedState] = useState(true)
  const [showFYI, setShowFYI] = useState(false)
  const [count, setCount] = useState(0)

  const savingStateRef = useRef(saved)
  const setSaved = data => {
    savingStateRef.current = data
    setSavedState(data)
  }

  const router = useRouter()
  // const slug = router?.asPath.split('/')[3]


  const poster = async () => {
    const appOrLeader =
      params.type === 'club' ? params.application : params.leader

    const msg = { body: JSON.stringify(data), method: 'POST' }
    const fetched = await fetch(
      `/api/${params.type}/save?id=${appOrLeader}`,
      msg
    )
    const json = await fetched.json()

    if (json.success) {
      setSaved(true)
    } else {
      console.error(json)
      alert(`❌ ${returnLocalizedMessage(router.locale, 'ERROR')}`)
    }

    return json
  }

  useEffect(() => {
    console.log(Math.floor(count / 3))
    setCount(0)
    poster();
  }, [Math.floor(count / 3)])

  useEffect(() => {
    window.addEventListener('beforeunload', function (e) {
      if (!savingStateRef.current) {
        e.preventDefault()
        e.returnValue = ''
      } else {
        delete e['returnValue']
      }
    })
  })

  async function goHome(autoSave = true) {
    if (!saved) {
      if (
        autoSave ||
        window.confirm(
          returnLocalizedMessage(router.locale, 'ARE_YOU_SURE_YOU_WANT_TO_SAVE')
        )
      ) {
        await poster()
      }
    }
    { leaderRecord.fields['Email'] != applicationsRecord.fields['Leaders Emails'][0] || params.type === 'club' ? router.push(`/${params.application}/${params.leader}/review`) : router.push(`/${params.application}/${params.leader}/register`)}
    
  }

  if (notFound) {
    return <Error statusCode="404" />
  }
  return (
    <Container py={4} variant="copy">
      <TimelineCard router={router} applicationsRecord={applicationsRecord} leaderRecord={leaderRecord} data={data} params={params} count={count} saved={saved} trackerRecord={trackerRecord}/>
      <SavedInfo saved={saved} poster={poster} router={router} />
      <Card
        px={[4, 4]}
        py={[3, 3]}
        sx={{
          color: 'blue',
          textAlign: 'left'
        }}
      >
        <Box sx={{ display: ['block', 'flex'], alignItems: 'center' }}>
          <Flex sx={{ alignItems: 'center', flexGrow: 1 }}>
            <Text
              sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <Icon glyph="home" onClick={() => goHome(false)} />
            </Text>
            <Text
              variant="subheadline"
              sx={{ fontWeight: 400, mb: 0, flexGrow: 1, ml: 2 }}
              as="div"
            >
              <Text
                sx={{
                  textDecoration: 'none',
                  color: 'blue',
                  cursor: 'pointer'
                }}
                onClick={() => goHome(false)}
              >
                {returnLocalizedMessage(router.locale, 'APPLY')}
              </Text>

              {' / '}
              <b>
                {params.type == 'club'
                  ? returnLocalizedMessage(router.locale, 'CLUB')
                  : returnLocalizedMessage(router.locale, 'LEADER')}
              </b>
            </Text>
          </Flex>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              cursor: 'pointer',
              '> svg': { display: ['none', 'inline'] },
              mt: [2, 0]
            }}
            onClick={() => poster()}
          >
            <Button
              sx={{
                color: 'white',
                mr: 2,
                fontWeight: '800',
                textTransform: 'uppercase',
                bg: saved ? '#33d6a6' : '#ff8c37',
                ':hover,:focus': saved ? { transform: 'none' } : {}
              }}
            >
              {saved
                ? returnLocalizedMessage(router.locale, 'SAVED')
                : returnLocalizedMessage(router.locale, 'SAVE')}
            </Button>
            <Icon
              glyph={saved ? 'checkmark' : 'important'}
              color={saved ? '#33d6a6' : '#ff8c37'}
            />
          </Box>
        </Box>
      </Card>
      <Card px={[4, 4]} py={[4, 4]} mt={4}>
        {params.type === 'club' ? <Box sx={{ fontSize: [1, 2], mb: '20px', color: 'placeholder'}}><Text>Answer these questions so we can personalize your club experience.</Text></Box> : (null)}
        <Text sx={{ fontSize: '20px', color: 'black' }}>
          {returnLocalizedMessage(router.locale, 'LANG_INFO')}
        </Text>
        {(params.type == 'club' ? manifest.clubs : manifest.leaders).map(
          (sectionItem, sectionIndex) => (
            <Box key={sectionIndex}>
              <Box sx={{ textAlign: 'left' }}>
                <Text sx={{ color: 'red', fontSize: '27px', fontWeight: 800 }}>
                  {returnLocalizedQuestionText(
                    router.locale,
                    sectionItem,
                    'header'
                  )}
                </Text>
              </Box>
              <Box>
                {sectionItem.label && (
                  <Box sx={{ color: 'muted', mb: 3 }}>
                    {returnLocalizedQuestionText(
                      router.locale,
                      sectionItem,
                      'label'
                    )}
                  </Box>
                )}
                {sectionItem.items.map((item, index) => ( 
                  <Box
                    mt={1}
                    mb={3}
                    key={'form-item-' + sectionIndex + '-' + index}
                  >
                    {item.key === 'Leaders Relationship' && applicationsRecord.fields['Prospective Leaders'].length === 1 ? (null) : (<>
                    
                    <Field
                      label={
                        <Text>
                          {returnLocalizedQuestionText(
                            router.locale,
                            item,
                            'label'
                          )}{' '}
                          <Text
                            sx={{
                              color: 'muted',
                              display: item.optional ? 'inline' : 'none'
                            }}
                          >
                            ({returnLocalizedMessage(router.locale, 'OPTIONAL')}
                            )
                          </Text>
                        </Text>
                      }
                      disabled={
                        applicationsRecord.fields['Submitted'] ? true : false
                      }
                      onChange={e => {
                        let newData = {}
                        newData[item.key] = e.target.value
                        setData({ ...data, ...newData })
                        setCount(count + 1)
                        setSaved(false)

                      }}
                      placeholder={returnLocalizedQuestionText(
                        router.locale,
                        item,
                        'placeholder'
                      )}
                      as={
                        item.type == 'string'
                          ? Input
                          : item.type == 'paragraph'
                          ? Textarea
                          : Select
                      }
                      type={item.inputType}
                      name="email"
                      value={data[item.key] !== undefined ? data[item.key] : ''}
                      onInput={
                        item.inputType === 'date' ? (e) => {handleChangeInDate(e.target.value, setShowFYI)} : null
                      }
                      sx={{
                        border: '1px solid',
                        borderColor: 'rgb(221, 225, 228)',
                        resize: 'vertical'
                      }}
                      {...(item.type == 'select'
                        ? item.options
                          ? {
                              children: (
                                <>
                                  <option value="" disabled>
                                    {returnLocalizedMessage(
                                      router.locale,
                                      'SELECT_ONE'
                                    )}
                                  </option>
                                  {returnLocalizedQuestionText(
                                    router.locale,
                                    item,
                                    'options'
                                  ).map(option => (
                                    <option key={option}>{option}</option>
                                  ))}
                                </>
                              )
                            }
                          : {
                              children: (
                                <>
                                  <option value="" disabled>
                                    {returnLocalizedMessage(
                                      router.locale,
                                      'SELECT_ONE'
                                    )}
                                  </option>
                                  {applicationsRecord.fields[
                                    item.optionsKey
                                  ].map(option => (
                                    <option key={option}>{option}</option>
                                  ))}
                                </>
                              )
                            }
                        : {})}
                    />
                    {/* HERE HERE */}
                    {item.inputType === 'date' ? (
                      <Text
                        sx={{
                          color: 'orange',
                          fontWeight: 'bold',
                          marginTop: [2]
                        }}
                        as="p"
                      >
                        { showFYI? <Text>{returnLocalizedMessage(
                          router.locale,
                          'FYI_WE_DONT_ACCEPT_FROM_UNI_AND_TEACHERS'
                        )} <Text
                        as="a"
                        href={`mailto:${returnLocalizedMessage(
                          router.locale,
                          'CONTACT_EMAIL'
                        )}`}
                        sx={{
                          color: 'orange',
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline',
                            textDecorationStyle: 'wavy'
                          }
                        }}
                      >{returnLocalizedMessage(router.locale, 'CONTACT_EMAIL')}</Text> {returnLocalizedMessage(router.locale, 'FOR_MORE_DETAILS')} </Text>: null}
                        
                      </Text>
                    ) : null}
                    
                    {item.words && (
                      <Text
                        sx={{ fontSize: '18px', color: 'muted', mt: 1 }}
                        as="p"
                      >
                        (
                        {returnLocalizedMessage(
                          router.locale,
                          'AIM_FOR_BETWEEN'
                        )}{' '}
                        {item.words}{' '}
                        {returnLocalizedMessage(router.locale, 'WORDS')}
                        {data[item.key] &&
                          ', ' +
                            data[item.key].split(' ').length +
                            ' ' +
                            returnLocalizedMessage(
                              router.locale,
                              data[item.key].split(' ').length == 1
                                ? 'WORD'
                                : 'WORDS'
                            ) +
                            ' ' +
                            returnLocalizedMessage(router.locale, 'SO_FAR')}
                        )
                      </Text>
                    )}
                    {item.sublabel && (
                      <Text sx={{ fontSize: '16px', color: 'muted' }} as="p">
                        {returnLocalizedQuestionText(
                          router.locale,
                          item,
                          'sublabel'
                        )}
                      </Text>
                    )}
                  </>)}
                  </Box>
                ))}
                
              </Box>
              
            </Box>
          )
        )}
        <Button
          sx={{
            mt: 3,
            width: '100%',
            textTransform: 'uppercase'
          }}
          variant="ctaLg"
          onClick={() => goHome(true)}
        >
          {returnLocalizedMessage(router.locale, 'CONTINUE')}
        </Button>
      </Card>
      <Box
  sx={{
    display: ['none', 'flex'],
    position: 'fixed',
    left: '10px',
    bottom: '10px',
    cursor: 'pointer',
    placeItems: 'center',
    background: '#00000002',
    px: 2,
    borderRadius: '15px'
  }}
  onClick={async () => {
    await destroyCookie(null, 'authToken', {
      path: '/'
    })
    router.push('/', '/', { scroll: false })
  }}
>
<Icon glyph="door-leave" style={{
    color: '#000000',
    opacity: 0.8,
  }}/>
<Text
    sx={{
      color: '#000000',
      fontWeight: '800',
      textTransform: 'uppercase',
      opacity: 1,
      transition: '0.5s ease-in-out',
      mx: '5px',
      ':hover,:focus': {
        opacity: 1,
        transition: '0.5s ease-in-out',
        color: '#ec3750',
      }
    }}
  >
    logout
  </Text>
  </Box>
    </Container>
  )
}

const SavedInfo = ({ saved, poster, router }) => (
  <Box
    sx={{
      display: ['none', 'flex'],
      position: 'fixed',
      right: '10px',
      bottom: '10px',
      cursor: 'pointer',
      placeItems: 'center',
      background: '#00000005',
      px: 2,
      borderRadius: '15px'
    }}
    onClick={poster}
  >
    <Text
      sx={{
        color: saved ? '#33d6a6' : '#ff8c37',
        fontWeight: '800',
        textTransform: 'uppercase'
      }}
    >
      {saved
        ? returnLocalizedMessage(router.locale, 'SAVED')
        : returnLocalizedMessage(router.locale, 'SAVE')}
    </Text>
    <Icon
      glyph={saved ? 'checkmark' : 'important'}
      color={saved ? '#33d6a6' : '#ff8c37'}
    />
   
  </Box>
)

export async function getServerSideProps({ res, req, params }) {
  const {
    prospectiveLeadersAirtable,
    applicationsAirtable,
    trackerAirtable
  } = require('../../../lib/airtable')
  const cookies = nookies.get({ req })
  if (cookies.authToken) {
    try {
      const leaderRecord = await prospectiveLeadersAirtable.find(
        'rec' + params.leader
      )
      const applicationsRecord = await applicationsAirtable.find(
        'rec' + params.application
      )
      const trackerRecord = await trackerAirtable.read({
          filterByFormula: `{App ID} = "rec${params.application}"`,
          maxRecords: 1,
    })
      if (leaderRecord.fields['Accepted Tokens'].includes(cookies.authToken)) {
        return { props: { params, applicationsRecord, leaderRecord, trackerRecord } }
      } else {
        res.statusCode = 302
        res.setHeader('Location', `/`)
        return
      }
    } catch (e) {
      res.statusCode = 302
      res.setHeader('Location', `/`)
      return
    }
  } else {
    res.statusCode = 302
    res.setHeader('Location', `/`)
    return
  }
}