import * as  React from 'react';
import './style.scss';

interface Props {
    name: string;
}

export class Page extends React.Component<Props> {
    render() {
        const { name } = this.props;
        return (
            <div className={`_page ${name} ${name}-page`}></div>
        );
    }
}
