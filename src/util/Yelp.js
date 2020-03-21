/*    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
                console.log(jsonResponse)
            }
        });
    }
};

export default Yelp;*/

const apiKey = 'yQxtt09gc-BUfHaG0zitDmZbnmqn1qYh_G5THN_gUSuhM0bOkkdssoGJ3aiVKMRIz727oTD3JDVxCPCCR4WzMzI-8q3eBIc9QmhneKBepCKAa7dU_gJX3RqIihyIXXYx'
class Yelp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(term, location, sortBy) {
        fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    item: json,
                })
                console.log(json)
            });
    }


    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div > Loading... < /div>
        } else {
            return ( <
                div className = "App" >
                <
                /div>
            );
        }
    }
}