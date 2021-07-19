const listings = [
	{
		id: 201,
		title: "Red Jacket",
		images: [{ fileName: "jacket1" }],
		price: 1999,
		categoryId: 5,
		userId: 1,
		location: {
			latitude: 37.78825,
			longitude: -122.4324,
		},
	},
	{
		id: 3,
		title: "Grey Couch",
		images: [{ fileName: "couch2" }],
		categoryId: 1,
		price: 32500,
		userId: 2,
		location: {
			latitude: 37.78825,
			longitude: -122.4324,
		},
	},
	{
		id: 1,
		title: "Room & Board couch (great condition) - delivery included",
		description:
			"I'm selling my furniture at a discount price. Pick up at Sliema. DM me asap.",
		images: [
			{ fileName: "couch1" },
			{ fileName: "couch2" },
			{ fileName: "couch3" },
		],
		price: 50000,
		categoryId: 1,
		userId: 1,
		location: {
			latitude: 37.78825,
			longitude: -122.4324,
		},
	},
	{
		id: 2,
		title: "Brown Oxfords",
		images: [{ fileName: "shoes1" }],
		categoryId: 5,
		price: 1999,
		userId: 2,
		location: {
			latitude: 37.78825,
			longitude: -122.4324,
		},
	},
	{
		id: 102,
		title: "Canon 400D (Great Condition)",
		images: [{ fileName: "camera1" }],
		price: 30000,
		categoryId: 3,
		userId: 1,
		location: {
			latitude: 37.78825,
			longitude: -122.4324,
		},
	},
	{
		id: 101,
		title: "Nikon D850 for sale",
		images: [{ fileName: "camera2" }],
		price: 35000,
		categoryId: 3,
		userId: 1,
		location: {
			latitude: 37.78825,
			longitude: -122.4324,
		},
	},
	{
		id: 4,
		title: "Sectional couch - Delivery available",
		description: "No rips no stains no odors",
		images: [{ fileName: "couch3" }],
		categoryId: 1,
		price: 40000,
		userId: 2,
		location: {
			latitude: 37.78825,
			longitude: -122.4324,
		},
	},
	{
		id: 6,
		title: "Clown Shoes",
		images: [{ fileName: "shoes2" }],
		categoryId: 5,
		price: 1200,
		userId: 2,
		location: {
			latitude: 37.78825,
			longitude: -122.4324,
		},
	},
];

const addListing = (listing) => {
	listing.id = listings.length + 1;
	listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
	addListing,
	getListings,
	getListing,
	filterListings,
};
