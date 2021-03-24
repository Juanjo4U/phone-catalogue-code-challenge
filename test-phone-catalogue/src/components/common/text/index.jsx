import { T } from "../../../translations"

export const Title = ({ children, text }) =>
    <p className='title textBold' >{text ? T(text) : ''}{children}</p>

export const Text = ({ children, text, className = '' }) =>
    <p className={'text ' + className}>{text ? T(text) : ''}{children}</p>

export const Description = ({ title, description }) =>
    <div style={{ display: 'flex' }} >
        <Text className='textBold' text={title} >: </Text><p className='text' >{description}</p>
    </div>