import React from 'react'
import { styled } from 'styletron-react'

const Layout = styled('section', {
    padding: '5vh .938rem 10vh',
    backgroundColor: '#8282c9',
});
Layout.displayName = 'Layout';

const Text1 = styled('p', {
  maxWidth: '7vh',
  height: '7vh',
  lineHeight: '6.75vh',
  margin: '2vh auto 5vh',
  fontSize: '4vh',
  textAlign: 'center',
  border: 'none',
  borderRadius: '50%',
  backgroundColor: 'crimson',
});
Text1.displayName = 'Text1';

const Text2 = styled('p', {
    margin: '0.3rem 0',
    color: 'white',
    fontFamily: 'Yu Gothic Medium, sans-serif',
    wordBreak: 'keep-all',
  });
  Text2.displayName = 'Text2';

const Span1 = styled('span', {
    fontWeight: '700',
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



const Text3 = styled('p', {
  backgroundColor: '#a2b1d6',
  wordBreak: 'keep-all',
  fontFamily: 'Yu Gothic Medium, sans-serif',
  padding: '1.5rem .8rem',
  marginBottom: '0',
  marginTop: '0',
  color: 'white',
  ':hover': {
    backgroundColor: '#666'
  },
  ':hover::after': {
    content: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0zNjguNzg1IDE4MS4xN2wtNzUuMDYzIDc1LjA0Yy00MS40MjkgNDEuNDUyLTEwOC42MzcgNDEuNDUyLTE1MC4wNzIgMC02LjUyNy02LjUxLTExLjYzMy0xMy44NDMtMTYuMTE3LTIxLjQwNmwzNC44NzctMzQuODc0YzEuNjU4LTEuNjcyIDMuNzA2LTIuNjMgNS42NjItMy43NTkgMi40MTEgOC4yMzggNi42MiAxNi4wMzcgMTMuMDk5IDIyLjUxNyAyMC42OSAyMC43MDYgNTQuMzU2IDIwLjY3NyA3NS4wMzQgMGw3NS4wNC03NS4wMzdjMjAuNzA1LTIwLjcwNCAyMC43MDUtNTQuMzYyIDAtNzUuMDUtMjAuNjgtMjAuNjg4LTU0LjMzNy0yMC42ODgtNzUuMDQgMEwyMjkuNTIgOTUuMzEzYy0yMS42NTQtOC40MzEtNDQuOTgzLTEwLjY5OC02Ny42OTQtNy4zN2w1Ni44NjEtNTYuODZjNDEuNDUzLTQxLjQ0NSAxMDguNjQzLTQxLjQ0NSAxNTAuMDk3IDAgNDEuNDMzIDQxLjQ0NCA0MS40MzMgMTA4LjY0NSAwIDE1MC4wODh6TTE3MC4zNTIgMzA0LjU2bC0yNi43MDMgMjYuNzEyYy0yMC42ODggMjAuNjc3LTU0LjM1NyAyMC42NzctNzUuMDQ4IDAtMjAuNjktMjAuNzA3LTIwLjY5LTU0LjM2NSAwLTc1LjA2M2w3NS4wNDgtNzUuMDM4YzIwLjcwNC0yMC43MDIgNTQuMzUtMjAuNzAyIDc1LjAzOCAwIDYuNDY0IDYuNDY1IDEwLjY3NyAxNC4yNjMgMTMuMTExIDIyLjQ5IDEuOTY4LTEuMTQzIDMuOTktMi4wNzIgNS42NDctMy43MzJsMzQuODc1LTM0Ljg2Yy00LjQ1NS03LjU5My05LjU4Ny0xNC45LTE2LjExNy0yMS40MTYtNDEuNDI1LTQxLjQ0NS0xMDguNjM5LTQxLjQ0NS0xNTAuMDg0IDBsLTc1LjAzNyA3NS4wNGMtNDEuNDQgNDEuNDU3LTQxLjQ0IDEwOC42MzggMCAxNTAuMDkyIDQxLjQ0NSA0MS40MzIgMTA4LjY0NCA0MS40MzIgMTUwLjA4OCAwbDU2Ljg3Ni01Ni44NzFjLTIyLjcyMyAzLjM0Ny00Ni4wNTkgMS4wNi02Ny42OTQtNy4zNTV6Ii8+PC9zdmc+)',
    verticalAlign: '-3px',
    paddingLeft: '.6rem',
    paddingRight: '.3rem',
  },
});
Text3.displayName = 'Text3';

const Span2 = styled('span', {
    fontWeight: '700',
    borderBottom: '1px dotted white',
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
  paddingLeft: '.4rem',
  paddingRight: '.4rem',
});
Span4.displayName = 'Span4';

const Span5 = styled('span', {
  backgroundColor: 'white',
  color: '#666',
  paddingLeft: '.4rem',
  paddingRight: '.4rem',
});
Span5.displayName = 'Span5';

const Span6 = styled('span', {
  backgroundColor: 'CornflowerBlue',
  paddingLeft: '.4rem',
  paddingRight: '.4rem',
  border: '1px solid white',
  color: 'white',
});
Span6.displayName = 'Span6';

const A1 = styled('a', {
  textDecoration: 'none',
});
A1.displayName = 'A1';

export default () => (
  <Layout>
    <Text1></Text1>
    <Text2>以下に<wbr/>表示されているのは<wbr/><Span1>一般の申し込みが<wbr/>可能なツアーのみ</Span1>です。<wbr/>2019年04月26日（金）22:15（パリ）<wbr/>5:15（東京）の情報です。
    </Text2>
    <Hr />
    <A1 rel="preload" href="https://www.pariscityvision.com/jp/versailles-trianon-1-day-tour" alt="申し込みはこちら：https://www.pariscityvision.com/jp/versailles-trianon-1-day-tour" title="申し込みはこちら：https://www.pariscityvision.com/jp/versailles-trianon-1-day-tour">
      <Text3>04月30日（火） <wbr/>
        <Span2>ヴェルサイユ宮殿と<wbr/>トリアノン離宮<wbr/>一日ツアー</Span2>　
        <wbr/>
        <Span3>
          <Span4>ツアーコード</Span4>
          <Span5>VT</Span5>
        </Span3>
        　<wbr/>
        <Span6>申し込みはこちら...</Span6>
        </Text3>
    </A1>
    <Hr />
  </Layout>
)