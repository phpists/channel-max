import { createSelectorCreator, defaultMemoize, createSelector } from 'reselect'
import isEqual from 'lodash.isequal'

export const selector = createSelector((s) => s, s => s)

export const deepEqualSelector = createSelectorCreator(
    defaultMemoize,
    isEqual,
)
