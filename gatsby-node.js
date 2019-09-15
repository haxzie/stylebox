const path = require('path');

// avoid webpack from messing with mapbox package
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /mapbox-gl/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}

exports.createPages = ({ actions, graphql}) => {


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
        if (res.errors) {
            return Promise.reject(res.errors);
        }
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