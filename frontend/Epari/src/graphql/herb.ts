import {gql} from 'graphql-tag';

export type HerbType = {
  id: string;
  name: string;
};

export type HerbList = {
  HerbList: HerbType[];
};

export const GET_HERBLIST = gql`
  query GET_HERBLIST($id: string) {
    id
    name
  }
`;
