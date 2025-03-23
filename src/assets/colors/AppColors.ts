
export default function AppColors() {

    return Object.freeze({
        brand: Object.freeze({
            red: '#E3000E',
            red10: '#E3000E19',
        }),
        semantics: Object.freeze({
            success: '#B9F6CA'
        }),
        neutral: Object.freeze({
            gray: '#9A9A9A',
            gray05: '#3333330D',
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
            backgroundSecondary: 'white',
            segmentedBackground: '#F4F3F6',
            white: 'white',
            black: 'black'
        }),
    });
}