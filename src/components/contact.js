import React from 'react'

const Contact = (props) => (
    <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">

        <input type="hidden" name="bot-field" />

        <div className="field half first">
            <label htmlFor="name">名前</label>
            <input type="text" name="name" id="name" placeholder="お名前を …" required/>
        </div>
        <div className="field half">
            <label htmlFor="email">メールアドレス</label>
            <input type="text" name="email" id="email" placeholder="メールアドレスを …" required/>
        </div>
        <div className="field">
            <label htmlFor="message">伝言</label>
            <textarea name="message" id="message" rows="6" placeholder="ご作文を …" required></textarea>
        </div>
        <ul className="actions">
            <li><input type="submit" value="伝言を送信" className="special" /></li>
            <li><input type="reset" value="取り消し" /></li>
        </ul>
    </form>
)

export default Contact