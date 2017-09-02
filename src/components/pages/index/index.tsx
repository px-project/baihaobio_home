import * as  React from 'react';
import { Footer } from '../footer';
import { Header } from '../header';
import './style.scss';

interface Props {
    name: string;
}

export class Page extends React.Component<Props> {
    render() {
        const { name, children } = this.props;
        return (
            <div className="container-fluid">
                <Header></Header>
                <div className={`_page ${name} ${name}-page`}>
                    {children}
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
