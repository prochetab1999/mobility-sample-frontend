import React from "react";

import Catalog from "./Catalog";
const catalog = {
  bpp_descriptor: {
    name: "Fake Taxi",
    code: "FAKE_TAXI",
  },
  bpp_providers: [
    {
      id: "FAKE_TAXI",
      descriptor: {
        name: "Fake Taxi",
        images: [
          "https://cdn3.iconfinder.com/data/icons/fake-news/500/yul748_24_fake_news_truck_business_logo_computer_car-512.png",
        ],
      },
      locations: [
        {
          id: "FAKE_TAXI_LOCATION_ID",
          gps: "12.973614,77.608548",
        },
      ],
      categories: [
        {
          id: "FAKE_TAXI_CATEGORY",
          descriptor: {
            name: "Premium Taxi",
          },
        },
      ],
      items: [
        {
          id: "FAKE_TAXI_ID",
          fulfillment_id: "FAKE_TAXI_FULFILLMENT_ID",
          descriptor: {
            name: "Premium Taxi",
            code: "Premium Taxi",
            images: [
              "https://cdn.iconscout.com/icon/premium/png-256-thumb/searching-car-automobile-3052095-2538547.png",
            ],
          },
          price: {
            currency: "INR",
            value: "111",
          },
          category_id: "FAKE_TAXI_CATEGORY_ID",
          tags: {
            NameOfModel: "Nexon",
            Make: "Tata",
            FuelType: "Petrol",
            VehicleType: "Premium Taxi",
          },
        },
      ],
    },
  ],
  bpp_fulfillments: [
    {
      tracking: false,
      start: {
        location: {
          gps: "12.934845,77.610949",
        },
      },
      end: {
        location: {
          gps: "13.011058,77.555064",
        },
      },
    },
  ],
  bpp_id: "LOCAL_BPP",
  bpp_uri: "http://localhost:3010/",
};
export default {
  title: "Catalog",
  component: Catalog,
};

export const Primary = () => <Catalog catalog={catalog}>Button</Catalog>;
