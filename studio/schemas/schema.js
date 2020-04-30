// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import service from './service'
import codeList from './codeList'
import invariant from './invariant'
import codeListLang from './codeListLang'
import lang from './lang'
import localeString from './localeString'
import localeText from './localeText'
import person from './person'
import organization from './organization'
import place from './place'
import postalAddress from './postalAddress'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    service,
    codeList,
    invariant,
    codeListLang,
    lang,
    localeString,
    localeText,
    person,
    organization,
    place,
    postalAddress,
    ])
})
