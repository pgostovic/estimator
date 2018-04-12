import graphql from '../../lib/graphql';

export const getNow = () => graphql('{ now }');
