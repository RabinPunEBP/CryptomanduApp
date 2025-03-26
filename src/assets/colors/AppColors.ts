
export default function AppColors() {

    return Object.freeze({
        brand: Object.freeze({
            orange: '#FFCB74',
            orange8: '#FFCB7414',
        }),
        semantics: Object.freeze({
            success: '#67DA9D',
            failure: '#F83F54',
            warning: '#FFCB74',
        }),
        neutral: Object.freeze({
            gray: '#9A9A9A',
            gray05: '#CCCCCC',
            gray50: '#33333380',
            gray70: '#333333B3',
            grayLight: '#EDEBF0',
            grayTertiary: '#EDEBF0',
            grayBorder: '#9E9E9E',
        }),
        progressBar: Object.freeze({
            backgroundColor: '#EDEBF0',
            outerContainer: '#FFFFFF',
            borderColor: '#EDEBF0',
        }),
        loaderColor: '#E3000E',
        default: Object.freeze({
            background: '#1A1C21',
            borderColor: '#FFFFFF14',
            backgroundSecondary: 'white',
            segmentedBackground: '#F4F3F6',
            white: 'white',
            black: 'black',
        }),
    });
}