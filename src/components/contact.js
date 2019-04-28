import React from 'react'
import { styled } from 'styletron-react'

function Contact (props) {

    const Form = styled('form', {
        textAlign: 'center',
    });
    Form.displayName = 'Form';

    const Label = styled('label', {
        color: 'white',
        display: 'block',
        marginBottom: '.45rem',
        '::after': {
            content: '"*"',
            color: 'crimson',
            fontSize: '1.5rem',
            lineHeight: '2rem',
            verticalAlign: 'top',
            height: '1.5rem',
        },
    });
    Label.displayName = 'Label';

    const Input = styled('input', {
        color: 'white',
        display: 'block',
        borderRadius: '.3rem',
        margin: '0 0 .45rem 0',
        boxSizing: 'border-box',
        width: '100%',
        padding: '.45rem',
        lineHeight: '25px',
        fontSize: '16px',
    });
    Input.displayName = 'Input';

    const Textarea = styled('textarea', {
        color: 'white',
        display: 'block',
        borderRadius: '.1875rem',
        margin: '0 0 .45rem 0',
        boxSizing: 'border-box',
        width: '100%',
        padding: '.45rem',
        lineHeight: '25px',
        fontSize: '16px',
    });
    Textarea.displayName = 'Textarea';

    const Button = styled('button', {
        color: '#FFF',
        padding: '.7rem 2rem',
        marginTop: '2rem',
        marginRight: props.$right ? "0.45rem" : "0",
        backgroundColor: 'rgba(255,255,255,0)',
        border: '1px solid #FFF',
        borderRadius: '3px',
        boxShadow: 'none',
        fontSize: '1.3rem',
        transition: 'all 0.4s ease',
        fontFamily: 'Yu Gothic Medium, sans-serif',
        ':hover': {
            backgroundColor: 'rgba(255,255,255,.2)',
        },
    });
    Button.displayName = 'Button';

    return (
        <Form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">

            <Input type="hidden" name="bot-field" />

            <Label htmlFor="name">名前</Label>
            <Input type="text" name="name" id="name" placeholder="お名前を …" required />

            <Label htmlFor="email">メールアドレス</Label>
            <Input type="text" name="email" id="email" placeholder="メールアドレスを …" required/>

            <Label htmlFor="message">伝言</Label>
            <Textarea name="message" id="message" rows="3" placeholder="ご作文を …" required></Textarea>
            <Button $right type="submit" value="伝言を送信">伝言を送信</Button>
            <Button type="reset" value="取り消し">取り消し</Button>
        
        </Form>
    )
}

export default Contact