import { GET_USER } from "../actionTypes";

const initialState = {
  "name": "janmesh",
  "education": [
    {
      "college": "IIITDMJ",
      "degree": "B. Tech",
      "from_year": "2020",
      "to_year": "2024",
      "grade": "8.0",
      "desc": "graduation degree"
    },{
      "college": "IIITDMJ",
      "degree": "B. Tech",
      "from_year": "2020",
      "to_year": "2024",
      "grade": "8.0",
      "desc": "graduation degree"
    }
  ],
  "projects": [
    {
      "name": "Blogging Ninja",
      "description": "CRUD application",
      "links": [
        {
          "displayText": "hosted Link",
          "link": "https://blogging-ninja.herokuapp.com/"
        },{
          "displayText": "github",
          "link": "https://blogging-ninja.herokuapp.com/"
        }
      ]
    }
  ],
  "experience": [
    {
      "organisation": "ERS",
      "from_year": "2021",
      "to_year": "2021",
      "role": "SDE",
      "description": "creted club website"
    }
  ],
  "social": [
    {
      "username": "janmesh799",
      "website": [
        {
          "platform": "leetcode",
          "displayText": "leetcode",
          "link": "leetcode link"
        }
      ]
    }
  ],
  "achievements": [
    {
      "index": 1,
      "description": "89th Rank in codechef starters"
    },
    {
      "index": 2,
      "description": "89th Rank in codechef starters"
    },
    {
      "index": 3,
      "description": "89th Rank in codechef starters"
    },
    {
      "index": 5,
      "description": "89th Rank in codechef starters"
    },
    {
      "index": 4,
      "description": "89th Rank in codechef starters"
    },
    {
      "index": 6,
      "description": "89th Rank in codechef starters"
    },
    {
      "index": 7,
      "description": "89th Rank in codechef starters"
    },
    {
      "index": 8,
      "description": "89th Rank in codechef starters"
    },
  ]
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        name: "janmesh",
      };
    default:
      return state;
  }
};

export default userReducer;
