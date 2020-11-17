import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 3DHJ0kgsN1ZUUBw0uhhgeRW2hGDPkyZE5wcTz0DHf4hZfD88n_hM1pZnZMTMhVWHI8R2NCF9mjP-GB0eXQlsPLBKt3h15VZslXs_3n_1_wUM6oTNPwrsWZPNlXmuX3Yx'
    }
});

