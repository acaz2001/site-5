import React from 'react'
import { defineQuery } from 'next-sanity'
import { sanityFetch } from './live'

export const getAllCategories = async () => {
    const All_CATEGORIES_QUUERY = defineQuery (
        `*[_type == "Category"] `
        );

}

export default getAllCategories
