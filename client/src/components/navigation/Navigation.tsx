import React from 'react';
import {IAppContext} from '../utilities/TranslationProvider';

interface INavDispatchProps {
    connectToSockets: () => void;
}

interface INavProps {
    appContext: IAppContext;
    messages: [];
    connectToSockets: () => void;
    username: string;
}

interface INavState {
    shouldBlink: boolean;
    unreadMessages: number;
}

export class Navigation extends React.Component<INavProps, INavState> {
    constructor (props: INavProps) {
        super(props);

        this.state = {
            shouldBlink: false,
            unreadMessages: 0
        }
    }

    public componentDidMount (): void {
        this.props.connectToSockets();
    }

    private startBlinking (): void {
        this.setState({
            shouldBlink: true
        });
    }

    private stopBlinking (): void {
        this.setState({
            shouldBlink: false
        });
    }

    public render () {
        const {appContext} = this.props;
        const {shouldBlink, unreadMessages} = this.state;

        return appContext && (
            <div>
                <div>Chat</div>
                <div>Settings</div>
            </div>
        );
    }
}