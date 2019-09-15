const path = require('path');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const MapsTemplate = path.resolve('src/templates/MapsTemplate/index.jsx');

    return graphql(
        `{
            
            allMarkdownRemark {
                nodes {
                    id
                    frontmatter {
                        slug
                        name
                        author
                        github
                    }
                }
                
            }
            
        }`
    ).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors);
        }
        console.log(JSON.stringify(res.data, null, 2));
        res.data.allMarkdownRemark.nodes.forEach(item => {
            // create an underscored slug as => username_map_style
            const slug = item.frontmatter.slug;
            createPage({
                path: slug,
                component: MapsTemplate,
            });
        })
    })
}