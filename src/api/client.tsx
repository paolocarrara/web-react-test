import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    ApolloLink,
    concat
} from "@apollo/client"

const protocol = 'https'
const host = 'harura-fliper-test.herokuapp.com'
const version = 'v1'
const endpoint = 'graphql'
const uri = protocol + '://' + host + '/' + version + '/' + endpoint
const apiKey = process.env.REACT_APP_API_KEY
const httpLink = new HttpLink({ uri })

const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            'content-type': 'application/json',
            'x-hasura-admin-secret': apiKey,
        }
    }));

    return forward(operation);
})

const ApiClient = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
});

export default ApiClient
