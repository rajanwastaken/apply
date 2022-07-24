export default {
  clubs: [
    {
      header: 'Leaders',
      translations: {
        'pt-BR': {
          header: 'Líderes'
        }
      },
      items: [
        {
          key: 'President',
          label: 'Who should we reach out to?',
          type: 'select',
          optionsKey: 'Leaders Emails',
          optional: false,
          translations: {
            'pt-BR': {
              label: 'Quem você gostaria que fosse seu ponto de contato?'
            }
          }
        },
        {
          key: 'Leaders Relationship',
          label: 'How long have you known your other club leaders and how did you meet?',
          translations: {
            'pt-BR': {
              label:
                'Há quanto tempo você e seus co-líderes se conhecem e como vocês se conheceram?',
              sublabel: '(Não tem problema se for liderar seu clube sozinho!)'
            }
          },
          type: 'paragraph',
          display: 'depends',
          optional: true,
          words: 50
        }
      ]
    },
    {
      header: 'Venue',
      translations: {
        'pt-BR': {
          header: 'Local'
        }
      },
      items: [
        {
          key: 'School Name',
          label: 'Where will your club meet?',
          translations: {
            'pt-BR': {
              label: 'Onde você está planejando criar seu Hack Club?',
              sublabel:
                '(Coloque o nome do local. Exemplo: "Escola Hacker Feliz")',
              placeholder: 'Escola Hacker Feliz'
            }
          },
          sublabel: '(Give us the name.)',
          placeholder: 'Happy Hack High School',
          type: 'string',
          optional: false
        },
        {
          key: 'Venue Type',
          label: 'What type of venue is this?',
          translations: {
            'pt-BR': {
              label: 'Que tipo de local é este?',
              sublabel:
                '(Pode ser uma escola, espaço maker ou qualquer outro lugar.)'
            }
          },
          type: 'string',
          sublabel: '(It can be a high school, makerspace, or something else.)',
          optional: false
        },
        {
          key: 'School Address',
          label: `What's the full address?`,
          type: 'paragraph',
          translations: {
            'pt-BR': {
              label: 'Qual é o endereço do clube?',
              sublabel: 'Por favor inclua cidade, estado, país e CEP.'
            }
          },
          optional: false,
          sublabel:
            'City, State / Province, Postal Code, Country'
        }
      ]
    },
    {
      header: 'Idea',
      translations: {
        'pt-BR': {
          header: 'Ideia'
        }
      },
      items: [
        {
          key: 'Why',
          label: 'Why are you planning to start a Hack Club?',
          type: 'paragraph',
          optional: false,
          translations: {
            'pt-BR': {
              label: 'Por que você deseja iniciar um Hack Club?'
            }
          },
          words: 75
        },
        {
          key: 'Success',
          label:
            'Describe what your club meetings will look like.',
          type: 'paragraph',
          translations: {
            'pt-BR': {
              label: 'Como será o seu clube?'
            }
          },
          optional: false,
          words: 75
        },
        {
          key: 'Get Out Of HC',
          label: 'What do you personally hope to get out of Hack Club?',
          type: 'paragraph',
          translations: {
            'pt-BR': {
              label: 'O que você espera aprender com o seu Hack Club?'
            }
          },
          optional: false,
          words: 75
        }
      ]
    },
    {
      header: 'Formation',
      translations: {
        'pt-BR': {
          header: 'Organização'
        }
      },
      items: [
        {
          key: 'Status',
          label: 'What steps have you taken to start your club?',
          sublabel:
            '(have you registered with your school, taken interest surveys, identified a sponsor, etc.)',
          type: 'paragraph',
          translations: {
            'pt-BR': {
              label: 'Que passos você fez para começar seu clube?',
              sublabel:
                '(Você se registrou com sua escola, fez formulários de interesse, etc.)'
            }
          },
          optional: false,
          words: 50
        },
        {
          key: 'What Is New',
          label:
            'Has your school had coding clubs before? What’s going to be new about your Hack Club?',
          type: 'paragraph',
          translations: {
            'pt-BR': {
              label:
                'Sua escola já teve clubes de programação antes? O que vai ser diferente no seu Hack Club?'
            }
          },
          optional: false,
          words: 50
        }
      ]
    },
    {
      header: 'Curious',
      translations: {
        'pt-BR': {
          header: 'Curiosidades'
        }
      },
      items: [
        {
          key: 'Hear About HC',
          label:
            'How did you hear about Hack Club? (i.e. from a friend, an event, a teacher, a website or twitter)',
          type: 'paragraph',
          translations: {
            'pt-BR': {
              label:
                'Como você ouviu falar do Hack Club? Se você ouviu falar de nós por meio de um evento ou website, mencione ele aqui.'
            }
          },
          optional: false
        }
      ]
    }
  ],
  leaders: [
    {
      header: 'Leader',
      translations: {
        'pt-BR': {
          header: 'Líder'
        }
      },
      items: [
        {
          key: 'Full Name',
          label: 'Full Name',
          type: 'string',
          translations: {
            'pt-BR': {
              label: 'Nome Completo',
              header: 'Líder'
            }
          },
          optional: false
        },
        {
          key: 'Birthday',
          label: 'Birthday',
          type: 'string',
          inputType: 'date',
          translations: {
            'pt-BR': {
              label: 'Data de Aniversário'
            }
          },
          optional: false
        },
        {
          key: 'School Year',
          label: 'Graduation Year',
          type: 'string',
          optional: false,
          translations: {
            'pt-BR': {
              label: 'Ano na escola'
            }
          }
        },
        {
          key: 'Phone',
          label: 'Phone number (include country code if not in the United States)',
          sublabel: (<>
            <a href="https://www.nationsonline.org/oneworld/international-calling-codes.htm" style={{ cursor: 'pointer', color: 'gray'}}>Find your country code here</a>
          </>
          ),
          type: 'string',
          inputType: 'tel',
          translations: {
            'pt-BR': {
              label: 'Número de telefone (inclua +55 antes se for do Brasil)'
            }
          },
          optional: false
        },
        {
          key: 'Address',
          label: 'Your full address (where we can ship you stickers)',
          type: 'paragraph',
          translations: {
            'pt-BR': {
              label:
                'Seu endereço completo (onde podemos te enviar figurinhas adesivas)',
              sublabel: 'Por favor inclua cidade, estado, país e CEP.'
            }
          },
          optional: false,
          sublabel:
            'City, State / Province, Postal Code, Country'
        }
      ]
    },
    {
      header: 'Presence',
      translations: {
        'pt-BR': {
          header: 'Links'
        }
      },
      items: [
        {
          key: 'Website',
          label: 'Personal website link',
          placeholder: 'https://',
          type: 'string',
          translations: {
            'pt-BR': {
              label: 'Link do site pessoal'
            }
          },
          optional: true
        },
        {
          key: 'GitHub',
          label: 'GitHub link',
          placeholder: 'https://',
          type: 'string',
          translations: {
            'pt-BR': {
              label: 'Link do GitHub'
            }
          },
          optional: true
        },
        {
          key: 'Twitter',
          label: 'Twitter link',
          placeholder: 'https://',
          type: 'string',
          translations: {
            'pt-BR': {
              label: 'Link do Twitter'
            }
          },
          optional: true
        },
        {
          key: 'Other',
          label: 'Other Technical Links',
          placeholder: 'https://',
          type: 'string',
          sublabel: '(Gitlab, Sourcehut, other site where your code lives)',
          translations: {
            'pt-BR': {
              label: 'Link do Other'
            }
          },
          optional: true
        },
      ]
    },
    {
      header: 'Skills',
      header: 'Hacker Details',
      label: (
        <>
          <span style={{ fontSize: '17px'}}>We want to get to know you! Please answer these questions like you’re telling them to a friend</span>
        </>
      ),
      translations: {
        'pt-BR': {
          header: 'Habilidades'
        }
      },
      items: [
        {
          key: 'Achievement',
          label: `Tell us about something you made which was personally meaningful to you?`,
          type: 'paragraph',
          translations: {
            'pt-BR': {
              label:
                'Conte-nos sobre algo que você fez que foi pessoalmente significativo para você.',
              sublabel: '(coloque links, se possível)'
            }
          },
          optional: false,
          sublabel: '(include links and links to images if possible)',
          characters: [150, 250]
        },
        {
          key: 'New Fact',
          label:
            'What is something surprising or amusing you learned recently?',
          type: 'paragraph',
          translations: {
            'pt-BR': {
              label: 'O que você aprendeu recentemente?',
              sublabel:
                'Não precisa ser relacionado ao Hack Club nem ter relação com programação. :)'
            }
          },
          optional: false,
          characters: [50, 400],
          sublabel: `Don't make it about Hack Club! Doesn't have to be about coding.`
        },
        {
          key: 'Hacker Story',
          label: (
            <>
              Please tell us about the time you most successfully hacked some
              (non-computer) system to your advantage.{' '}
              <a
                href="https://www.quora.com/When-have-you-most-successfully-hacked-a-non-computer-system-to-your-advantage"
                style={{ color: '#338eda' }}
              >
                Here are examples of what we&#39;re looking for
              </a>
              .
            </>
          ),
          translations: {
            'pt-BR': {
              label: (
                <>
                  Por favor nos conte alguma vez que você hackeou com sucesso
                  algum sistema (não computacional) para obter alguma vantagem.
                  <a
                    href="https://www.quora.com/When-have-you-most-successfully-hacked-a-non-computer-system-to-your-advantage"
                    style={{ color: '#338eda' }}
                  >
                    {' '}
                    Aqui estão alguns exemplos do que estamos buscando
                  </a>
                  .
                </>
              )
            }
          },
          plainText:
            'Please tell us about the time you most successfully hacked some (non-computer) system to your advantage.',
          type: 'paragraph',
          optional: false,
          characters: [450, 1200]
        },
       /* {
          key: 'Technicality',
          label:
            'Are you technical? (You are a programmer who can teach without outside assistance)',
          type: 'select',
          optional: false,
          translations: {
            'pt-BR': {
              label:
                'Você tem habilidades técnicas? (Você é um programador que consegue ensinar sem assistência externa)',
              sublabel: `(Tudo bem se não! Estamos aqui para ajudar você!)`,
              options: ['Sim', 'Não']
            }
          },
          sublabel: `(It's okay if not!)`,
          options: ['Yes', 'No']
        } */
      ]
    },
    {
      header: 'Optional Stats',
      label:
        'We care about being as inclusive as possible. Sharing this information helps us achieve that goal.',
      translations: {
        'pt-BR': {
          header: 'Estatísticas',
          label:
            'Estatísticas demográficas são coletadas apenas para compartilharmos com nossos doadores e não vão influenciar a análise de sua inscrição.'
        }
      },
      items: [
        {
          key: 'Gender',
          label: 'Pronouns',
          optional: true,
          type: 'string',
          translations: {
            'pt-BR': {
              label: 'Gênero',
            }
          },
          optional: true
        },
        {
          key: 'Ethnicity',
          label: 'Ethnicity',
          type: 'select',
          translations: {
            'pt-BR': {
              label: 'Etnia',
              options: [
                'Hispânico',
                'Branco',
                'Preto',
                'Indígena',
                'Asiático',
                'Outra etnia'
              ]
            }
          },
          options: [
            'Hispanic, Latino or Spanish origin',
            'White',
            'Black, African American',
            'American Indian or Alaska native',
            'Asian',
            'Asian Indian',
            'Native Hawaiian or Other Pacific Islander',
            'Other Ethnicity',
            'Prefer not to say'
          ],
          optional: true
        }
      ]
    },
  ],
  metaData: {
    maximumAge: 20 /**IN YEARS*/
  }
}