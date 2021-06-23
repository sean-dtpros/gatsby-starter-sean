import { useStaticQuery, graphql } from 'gatsby';


const useJobPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulJobPost(sort: { order: DESC, fields: startDate }) {
          edges {
            node {
              position
              company
              startDate(formatString: "MM, YYYY")
              endDate(formatString: "MM, YYYY")
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
