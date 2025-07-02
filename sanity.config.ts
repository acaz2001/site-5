'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig, deskTool, structureTool } from 'sanity'
import { structure } from './sanity/structure'

import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool(),
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
