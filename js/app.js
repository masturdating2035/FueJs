document.getElementById('root').append(
    FueJs.createElement('div', {
        style: {
            background: 'blue',
            width: '500px',
            height: '500px'
        }
    }, FueJs.createElement('div', {
        style: {
            background: 'red',
            width: '100px',
            height: '100px'
        }
    }))
)