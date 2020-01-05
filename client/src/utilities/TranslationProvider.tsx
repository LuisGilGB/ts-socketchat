import React from 'react';

export interface IAppContext {}

const context = React.createContext<IAppContext | any>(null);

const AppContextProvider = context.Provider;
export const AppContextConsumer = context.Consumer;

export default class TranslationProvider extends React.Component {
    public state = {
    }

    public render () {
        return (
            <AppContextProvider
                value={{
                    state: this.state
                }}
            >
                {this.props.children as any}
            </AppContextProvider>
        );
    }
}