import { useStaticQuery, graphql } from 'gatsby';

const useJobPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulJobPost(sort: { order: DESC, fields: startDate }) {
          edges {
            node {
              position
              startDate
              endDate
              organization {
                childMarkdownRemark {
                  html
                }
              location
              summary {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `
  );
  return data;
};

export default useJobPosts;