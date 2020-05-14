export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebda8d90530a062f4bb2602',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-257-studio',
                  apiId: '13f4dcb6-f70c-44ca-937b-6e9902cb08ca'
                },
                {
                  buildHookId: '5ebda8d9482f2b64ec1bbda8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-257',
                  apiId: '57646df7-3984-457f-9997-b1c5bfa5bd46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evenwestvang/sanity-gatsby-portfolio-257',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-257.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
