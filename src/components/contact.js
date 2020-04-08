import React from 'react'
import { styled } from 'styletron-react'
import THEME from '../theme'

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
            content: ''*'',
            color: 'crimson',
            paddingLeft: '3px',
            verticalAlign: 'sup',
            lineHeight: '2rem',
            height: '1.5rem',
            fontSize: '1.5rem',
        },
    });
    Label.displayName = 'Label';

    const Input = styled('input', {
        color: '#666',
        display: 'block',
        borderRadius: '.3rem',
        margin: '0 0 .45rem 0',
        boxSizing: 'border-box',
        width: '100%',
        padding: '.45rem',
        lineHeight: '1.6rem',
        fontSize: '16px',
        fontFamily: THEME.fontFamily[0],
        cursor: 'text',
        caretColor: '#009933',
        ':focus': {
            color: '#666'
        },
    });
    Input.displayName = 'Input';

    const Button = styled('button', props => ({
        color: 'white',
        padding: '.7rem 2rem',
        marginTop: '2rem',
        marginRight: props.$right ? '0.45rem' : '0',
        backgroundColor: 'rgba(255,255,255,0)',
        border: '1px solid #fff',
        borderRadius: '3px',
        boxShadow: 'none',
        fontSize: '1.3rem',
        fontFamily: THEME.fontFamily[0],
        transition: 'all 0.4s ease',
        ':hover': {
            backgroundColor: 'rgba(255,255,255,.2)',
            cursor: 'pointer',
        },
    }));
    Button.displayName = 'Button';

    return (
        <Form name='contact' method='post' action='/success' data-netlify='true' data-netlify-honeypot='bot-field'>

            <Input type='hidden' name='bot-field' />

            <Label htmlFor='name'>名前</Label>
            <Input type='text' name='name' id='name' title='お名前をここでご記入下さい …' placeholder='お名前を …' required />

            <Label htmlFor='email'>メールアドレス</Label>
            <Input type='text' name='email' id='email' title='メールアドレスをここでご記入下さい …' placeholder='メールアドレスを …' required/>

            <Label htmlFor='message'>伝言</Label>
            <Input $as='textarea' name='message' id='message' rows='3' title='ご作文をここでご記入下さい …' placeholder='ご作文を …' required></Input>
            <Button $right type='submit' value='伝言を送信'>伝言を送信</Button>
            <Button type='reset' value='取り消し'>取り消し</Button>
        
        </Form>
    )
}

export default Contact