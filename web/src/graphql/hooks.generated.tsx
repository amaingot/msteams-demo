import { gql } from 'apollo-boost';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
}


export interface Query {
  __typename?: 'Query';
  now?: Maybe<Scalars['DateTime']>;
}

export type NowQueryVariables = Exact<{ [key: string]: never; }>;


export type NowQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'now'>
);


export const NowDocument = gql`
    query Now {
  now
}
    `;

/**
 * __useNowQuery__
 *
 * To run a query within a React component, call `useNowQuery` and pass it any options that fit your needs.
 * When your component renders, `useNowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNowQuery({
 *   variables: {
 *   },
 * });
 */
export function useNowQuery(baseOptions?: Apollo.QueryHookOptions<NowQuery, NowQueryVariables>) {
        return Apollo.useQuery<NowQuery, NowQueryVariables>(NowDocument, baseOptions);
      }
export function useNowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NowQuery, NowQueryVariables>) {
          return Apollo.useLazyQuery<NowQuery, NowQueryVariables>(NowDocument, baseOptions);
        }
export type NowQueryHookResult = ReturnType<typeof useNowQuery>;
export type NowLazyQueryHookResult = ReturnType<typeof useNowLazyQuery>;
export type NowQueryResult = Apollo.QueryResult<NowQuery, NowQueryVariables>;