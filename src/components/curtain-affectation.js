import React from 'react'
import moment from 'moment'
import 'moment/locale/ja'
import toWideAlphanumeric from 'jaco/fn/toWideAlphanumeric'
import { StaticQuery, graphql } from 'gatsby'
import { styled, withStyle } from 'styletron-react'

const H4 = styled('h4', {
    fontSize: '1.3rem',
    marginTop: 'calc(0.85rem + 6.75vh)',
    marginRight: 'auto',
    marginBottom: '0.5rem',
    marginLeft: 'auto',
    color: 'white',
    fontWeight: 400,
    textAlign: 'center',
    lineHeight: '6.75vh',
    height: '7vh',
});
H4.displayName = 'H4';

const Layout = styled('section', {
    paddingTop: '5vh',
    paddingRight: '0.8rem',
    paddingBottom: '10vh',
    paddingLeft: '0.8rem',
    backgroundColor: '#8282c9',
    '@media screen and (max-width: 959px) and (min-width: 768px)': {
      paddingRight: '10px',
      paddingLeft: '10px', 
    },
    '@media screen and (max-width: 767px)': {
      paddingRight: '6px',
      paddingLeft: '6px', 
    }
});
Layout.displayName = 'Layout';

const Text = styled('p', {
  color: 'white',
  fontFamily: 'Yu Gothic Medium, sans-serif',
  lineHeight: '2',
});
Text.displayName = 'Text';

const Text2 = withStyle(Text, {
  margin: '0.3rem 0',
  cursor: 'context-menu',
  wordBreak: 'keep-all',
  });
  Text2.displayName = 'Text2';

const Span1 = styled('span', {
    fontWeight: '400',
});
Span1.displayName = 'Span1';

const Hr = styled('hr', {
    borderTop: 'none',
    borderLeft: 'none',
    borderBottom: '1px solid #e6e6e6',
    borderRight: 'none',
    margin: '0 0',
});
Hr.displayName = 'Hr';

const couleurslignes = [ '#bea893', '#a8be93', '#93be93', '#93bebe', '#93a8be', '#94b5ce', '#a2b1d6', '#c2c273', '#beb6ca' ]

function shuffle(arra1) {
  let ctr = arra1.length;
  let temp;
  let index;
// While there are elements in the array
  while (ctr > 0) {
// Pick a random index
      index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
      ctr--;
// And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}

const shufflecouleurslignes = shuffle(couleurslignes)

const Text3 = withStyle(Text, {
  backgroundColor: '#a2b1d6',
  padding: '1.5rem 0.8rem',
  marginTop: '0',
  marginBottom: '0',
  ':hover': {
    backgroundColor: '#666'
  },
  ':hover::after': {
    content: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0zNjguNzg1IDE4MS4xN2wtNzUuMDYzIDc1LjA0Yy00MS40MjkgNDEuNDUyLTEwOC42MzcgNDEuNDUyLTE1MC4wNzIgMC02LjUyNy02LjUxLTExLjYzMy0xMy44NDMtMTYuMTE3LTIxLjQwNmwzNC44NzctMzQuODc0YzEuNjU4LTEuNjcyIDMuNzA2LTIuNjMgNS42NjItMy43NTkgMi40MTEgOC4yMzggNi42MiAxNi4wMzcgMTMuMDk5IDIyLjUxNyAyMC42OSAyMC43MDYgNTQuMzU2IDIwLjY3NyA3NS4wMzQgMGw3NS4wNC03NS4wMzdjMjAuNzA1LTIwLjcwNCAyMC43MDUtNTQuMzYyIDAtNzUuMDUtMjAuNjgtMjAuNjg4LTU0LjMzNy0yMC42ODgtNzUuMDQgMEwyMjkuNTIgOTUuMzEzYy0yMS42NTQtOC40MzEtNDQuOTgzLTEwLjY5OC02Ny42OTQtNy4zN2w1Ni44NjEtNTYuODZjNDEuNDUzLTQxLjQ0NSAxMDguNjQzLTQxLjQ0NSAxNTAuMDk3IDAgNDEuNDMzIDQxLjQ0NCA0MS40MzMgMTA4LjY0NSAwIDE1MC4wODh6TTE3MC4zNTIgMzA0LjU2bC0yNi43MDMgMjYuNzEyYy0yMC42ODggMjAuNjc3LTU0LjM1NyAyMC42NzctNzUuMDQ4IDAtMjAuNjktMjAuNzA3LTIwLjY5LTU0LjM2NSAwLTc1LjA2M2w3NS4wNDgtNzUuMDM4YzIwLjcwNC0yMC43MDIgNTQuMzUtMjAuNzAyIDc1LjAzOCAwIDYuNDY0IDYuNDY1IDEwLjY3NyAxNC4yNjMgMTMuMTExIDIyLjQ5IDEuOTY4LTEuMTQzIDMuOTktMi4wNzIgNS42NDctMy43MzJsMzQuODc1LTM0Ljg2Yy00LjQ1NS03LjU5My05LjU4Ny0xNC45LTE2LjExNy0yMS40MTYtNDEuNDI1LTQxLjQ0NS0xMDguNjM5LTQxLjQ0NS0xNTAuMDg0IDBsLTc1LjAzNyA3NS4wNGMtNDEuNDQgNDEuNDU3LTQxLjQ0IDEwOC42MzggMCAxNTAuMDkyIDQxLjQ0NSA0MS40MzIgMTA4LjY0NCA0MS40MzIgMTUwLjA4OCAwbDU2Ljg3Ni01Ni44NzFjLTIyLjcyMyAzLjM0Ny00Ni4wNTkgMS4wNi02Ny42OTQtNy4zNTV6Ii8+PC9zdmc+)',
    paddingLeft: '0.6rem',
    paddingRight: '0.3rem',
  },
});
Text3.displayName = 'Text3';

const Text4 = withStyle(Text, {
  padding: '1.5rem 0.8rem',
  marginTop: '0',
  marginBottom: '0',
  cursor: 'context-menu',
});
Text4.displayName = 'Text4';

const Span2 = styled('span', {
    borderBottomWidth: '1px',
    borderBottomStyle: 'dotted',
    borderBottomColor: 'white',
    paddingBottom: '.02rem',
});
Span2.displayName = 'Span2';

const Span3 = styled('span', {
  border: '1px solid #999',
});
Span3.displayName = 'Span3';

const Span4 = styled('span', {
  backgroundColor: '#e6e6e6',
  color: '#666',
  paddingLeft: '0.4rem',
  paddingRight: '0.4rem',
});
Span4.displayName = 'Span4';

const Span5 = withStyle(Span4, {
  backgroundColor: 'white',
});
Span5.displayName = 'Span5';

const Span6 = withStyle(Span4, {
  backgroundColor: 'CornflowerBlue',
  color: 'white',
  border: '1px solid white',
});
Span6.displayName = 'Span6';

const Span7 = withStyle(Span4, {
  backgroundColor: 'crimson',
  color: 'white',
  border: '1px solid white',
  animationDuration: '3s',
  animationIterationCount: 'infinite',
  animationName: {
    '0%': {'opacity': 1},
    '40%': {'opacity': 1},
    '40.01%': {'opacity': 0},
    '60%': {'opacity': 0},
    '60.01%': {'opacity': 1},
    '100%': {'opacity':1}
  }
});
Span7.displayName = 'Span7';

const Span8 = styled('span', {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'double',
    textDecorationColor: 'crimson',
    paddingBottom: '0.02rem',
});
Span8.displayName = 'Span8';

const Span9 = withStyle(Span7, {
  backgroundColor: '#009933',
});
Span9.displayName = 'Span9';

const A1 = styled('a', {
  textDecoration: 'none',
});
A1.displayName = 'A1';

const Container = styled('div');
Container.displayName = 'Container';

export default () => (
  ListeDates()
)

function ListeDates() {
  return <StaticQuery query={graphql`{
    sanityService {
      _updatedAt
      codeListLang {
        codeList {
          invariant {
            availability
            priceValidUntil
            rootCityvision
            rootCityvisionCdnImage
          }
        }
      }
    }
    allSanityService(sort: {fields: startDate, order: ASC}) {
      edges {
        node {
          codeListLang {
            breadcrumb {
              ja
            }
            cityvisionLinkUri
            codeList {
              cityvisionImage
              code
              description
              length
              price
              startHour
              startQuarter
            }
            description {
              ja
            }
            intitule {
              ja
            }
            lang {
              name
              title
            }
          }
          releaseDate
          startDate(formatString: "YYYY-MM-DD HH:mm")
          status
        }
      }
    }
  }
  `} render={data => 
  <Layout id='realtime-schedule'>
    <H4>
      リアルタイム・<wbr />スケジュール
    </H4>
    <Text2>
      以下に<wbr />表示されているのは<wbr />
      <Span1>一般の申し込みが<wbr />可能なツアーのみ</Span1>
      です。<wbr />
      {toWideAlphanumeric(moment(moment(data.sanityService._updatedAt)).format('YYYY年MM月DD日（ddd）HH：mm'))}（パリ）<wbr />{toWideAlphanumeric(moment(moment(data.sanityService._updatedAt)).utcOffset(9).format('HH：mm'))}
      （東京）<wbr />の情報です。
    </Text2>
    <Hr />   
      {data.allSanityService.edges.map((array, key) => {
        let startDate = moment(array.node.startDate).add(array.node.codeListLang.codeList.startHour, 'hours').add(array.node.codeListLang.codeList.startQuarter, 'minutes')
        let codeListLang = array.node.codeListLang
        let status = array.node.status
        let _updatedAt = array.node._updatedAt
        let codeIndex = [codeListLang.codeList.code, key].join('')
        let rootCityvision = data.sanityService.codeListLang.codeList.invariant.rootCityvision
        console.log(startDate)
      if (
        // service en cours (commencé), non annulé
        (key === 0)
        && (moment(startDate).add(moment.duration(codeListLang.codeList.length)) > moment(moment(_updatedAt))) 
        && (moment(moment(startDate, 'YYYY-MM-DD HH:mm')) < moment(moment(_updatedAt)))
        && (status !== 'EventCancelled')) {
        return <Container key={codeIndex}>
          <Text4 $style={{ backgroundColor: shufflecouleurslignes[0] }}>
            {toWideAlphanumeric(moment(moment(startDate, 'YYYY-MM-DD HH:mm')).format('MM月DD日（ddd）'))}　<wbr/>
            <Span2 $style={{ borderBottomStyle: 'none' }}>{codeListLang.intitule.ja}</Span2>　<wbr/>
            <Span3>
              <Span4>
                ツアーコード
              </Span4>
              <Span5>{codeListLang.codeList.code}</Span5>
            </Span3>　<wbr/>
            <Span9>
              只今案内中
            </Span9>
          </Text4>
          <Hr />
        </Container>} 
      else if (
        // service prévu, non commencé, non annulé
        (moment(moment(startDate, 'YYYY-MM-DD HH:mm')) > moment(moment(_updatedAt))) 
        && (status !== 'EventCancelled')
        ) {
        return <Container key={codeIndex}>
          <A1 aria-label={'シティヴィジョン・' + rootCityvision + codeListLang.codeList.code + '・ページーへ移動する'} rel='preload' href={rootCityvision + codeListLang.lang.name + '/' + codeListLang.cityvisionLinkUri} alt={'申し込みはこちら：' + rootCityvision + codeListLang.lang.name + '/' + codeListLang.cityvisionLinkUri} title={'申し込みはこちら：' + rootCityvision + codeListLang.lang.name + '/' + codeListLang.cityvisionLinkUri}>
          <Text3 $style={{ backgroundColor: shufflecouleurslignes[key] }}>{toWideAlphanumeric(moment(moment(startDate, 'YYYY-MM-DD HH:mm')).format('MM月DD日（ddd）'))} <wbr/>　
            <Span2>{codeListLang.intitule.ja}</Span2>　<wbr/>
            <Span3><Span4>ツアーコード</Span4><Span5>{codeListLang.codeList.code}</Span5></Span3>　<wbr/>
            <Span6>申し込みはこちら...</Span6>
          </Text3>
          </A1>
          <Hr />
        </Container>}
      else if (
        //service annulé
        (moment(moment(startDate, 'YYYY-MM-DD HH:mm')) > moment(moment(_updatedAt))) 
        && status === 'EventCancelled') {
        return <Container key={codeIndex}>
        <Text4 $style={{ backgroundColor: shufflecouleurslignes[key], cursor: 'not-allowed' }}>{toWideAlphanumeric(moment(moment(startDate, 'YYYY-MM-DD HH:mm')).format('MM月DD日（ddd）'))}　<wbr/>
          <Span7>キャンセル</Span7>　<wbr/>
          <Span8>{codeListLang.intitule.ja}</Span8>
        </Text4>
        <Hr />
      </Container>}
      else { return '' }
    } )}
  </Layout>}></StaticQuery>;
}