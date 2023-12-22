const previsao = () => {

    return Promise.resolve({
        location: {
            name: 'São Paulo',
            coordinates: { lat: -23.5505, lng: -46.6333 }, 
        },
        weather: {
            summary: 'Parcialmente nublado', 
            temperature: '24 C',            
            humidity: '65%',               
            
        }
    });
}

exports.previsaoTempo = async (req, res, next) => {
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.previsaoContext = await previsao();
    next();
}

