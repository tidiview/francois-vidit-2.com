import { BsPersonBoundingBox } from 'react-icons/bs'

export default {
  name: 'person',
  title: 'Person',
  icon: BsPersonBoundingBox,
  type: 'document',
  fields: [
    {
      name: 'familyName',
      title: 'family Name',
      type: 'string',
    },
    {
      name: 'givenName',
      title: 'given Name',
      type: 'string',
    },
    {
      name: 'alternateName',
      title: 'alternateName',
      type: 'string',
    },
    {
      name: 'personUrl',
      title: 'person Url',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeString',
    },
    {
      name: 'knowsLanguage',
      title: 'knows Language',
      type: 'reference',
      to: [
        {
          name: 'lang',
          title: 'Langues',
          type: 'lang',
        }
      ]
    },
    {
      name: 'JobTitle',
      title: 'Job Title',
      type: 'localeString',
    },
    {
      name: 'postalAddress',
      title: 'Postal Address',
      type: 'reference',
      to: [
        {
          name: 'postalAddress',
          title: 'Postal Address',
          type: 'postalAddress',
        }
      ]
    },
    {
      name: 'sameAs',
      title: 'sameAs',
      type: 'array',
      of: [
        {
          name: 'social',
          title: 'Social',
          type: 'url',
        }
      ]
    },
    {
      name: 'memberOf',
      title: 'memberOf',
      type: 'reference',
      to: [
        {
          name: 'organization',
          title: 'Organization',
          type: 'organization',
        }
      ]
    },
  ]
}


/* "@type": "Person",
	"familyName": [{"@language": "ja", "@value": "VIDIT"}, {"@language": "ja", "@value": "ヴィディ"}, {"@language": "fr", "@value": "VIDIT"}, {"@language": "en", "@value": "VIDIT"}],
	"givenName": [{"@language": "ja", "@value": "François"}, {"@language": "ja", "@value": "フランソワ"}, {"@language": "fr", "@value": "François"}, {"@language": "en", "@value": "François"}],
	"name": [{"@language": "ja", "@value": "François VIDIT"}, {"@language": "ja", "@value": "フランソワ・ヴィディ"}, {"@language": "fr", "@value": "François VIDIT"}, {"@language": "en", "@value": "François VIDIT"}],
	"url": "https://francois-vidit.com/profile/{{ langswitcher.current }}",
	"mainEntityOfPage": "https://francois-vidit.com/profile/{{ langswitcher.current }}",
	"hasOfferCatalog": {
		"@type": "OfferCatalog",
		"@id": "https://francois-vidit.com/ja#futures-dates"
	},
	"description": [{
	      "@language": "ja",
	      "@value": "フランソワ・ヴィディはパリから活躍するフランス日本語ガイド通訳協会会員の通訳案内士です。"},
	      {"@language": "fr",
	      "@value": "François VIDIT est un guide de tourisme en langue japonaise français membre de l'A.G.I.J (Association des Guide-Interprètes de langue Japonaise) qui exerce à Paris"},
	      {"@language": "en",
	      "@value": "François VIDIT is a french tour guide in japanese language member of A.G.I.J. (french japanese-language speaking licenced guides association) that works from Paris"}],
	"knowsLanguage": [{
		"@type": "Language",
		"name": [{
				"@language": "ja",
				"@value": "フランス語"},
				{"@language": "fr",
				"@value": "français"},
				{"@language": "en",
				"@value": "french"} ],
		"alternateName": "fr"
	},
	{
		"@type": "Language",
		"name": [{
			"@language": "ja",
			"@value": "日本語"},
			{"@language": "fr",
			"@value": "japonais"},
			{"@language": "en",
			"@value": "japanese"} ],
		"alternateName": "ja"
	},
	{
		"@type": "Language",
		"name": [{
			"@language": "ja",
			"@value": "英語"},
			{"@language": "fr",
			"@value": "anglais"},
			{"@language": "en",
			"@value": "english"} ],
		"alternateName": "en"
	}],
    "JobTitle": [{
		"@language": "ja",
		"@value": "フランス日本語通訳案内士"},
		{"@language": "fr",
		"@value": "Guide-Interprète National en langue japonaise"},
		{"@language": "fr",
		"@value": "Guide-Conférencier National en langue japonaise"},
		{"@language": "en",
		"@value": "French National Guide in japanese language"}],
	"address": {
		"@type": "PostalAddress",
		"addressCountry": {
			"@type": "Country",
			"name": [{
				"@language": "ja",
				"@value": "フランス"},
				{"@language": "ja",
				"@value": "FRANCE"},
				{"@language": "fr",
				"@value": "FRANCE"},
				{"@language": "en",
				"@value": "FRANCE"}]
		},
		"addressLocality": [{
			"@language": "ja",
			"@value": "パリ"},
			{"@language": "ja",
			"@value": "PARIS"},
			{"@language": "fr",
			"@value": "PARIS"},
			{"@language": "en",
			"@value": "PARIS"}],
		"postalCode": "75015",
		"streetAddress": [{
			"@language": "ja",
			"@value": "１０、ルー・テオフラスト・ルノド"},
			{"@language": "ja",
			"@value": "10, rue Théophraste RENAUDOT"},
			{"@language": "fr",
			"@value": "10, rue Théophraste RENAUDOT"},
			{"@language": "en",
			"@value": "10, rue Théophraste RENAUDOT"}]
	},
	"sameAs": [
		"https://francois-vidit.com/profile/{{ langswitcher.current }}",
		"https://www.twitter.com/@bf7afa37fa9{% if langswitcher.current == 'ja' %}4ja{% elseif langswitcher.current == 'en' %}4en{% else %}74cd{% endif %}/",
		"https://www.github.com/tidiview/francois-vidit.com"
	],
	"memberOf": [{
	    "@type": "Organization",
	    "@id": "http://www.agij-paris.com",
	    "name": "A.G.I.J.",
	    "url": "http://www.agij-paris.com",
	    "logo": "http://www.agij-paris.com/image/title01.gif",
	    "description": [{
			"@language": "ja",
			"@value": "「A.G.I.J」は「フランス日本語通訳ガイド協会」です"},
			{"@language": "fr",
			"@value": "'A.G.I.J' signifie 'Association des Guide-Interprètes en langue Japonaise'"},
			{"@language": "en",
			"@value": "'A.G.I.J'　stands for 'French Japanese Speaking Guides Association'"}]
	}] */