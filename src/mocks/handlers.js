import { rest } from 'msw'

const GET_BOOKS_URL = 'https://api.airtable.com/v0/appD4uP6UKoSlwyRl/Books?maxRecords=15&view=Grid%20view&sort%5B%5D%5Bfield%5D=id&sort%5B%5D%5Bdirection%5D=asc'
const POST_BOOKS_URL = 'https://api.airtable.com/v0/appD4uP6UKoSlwyRl/Books'

export const handlers = [
  rest.get(GET_BOOKS_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        {
          "records":
            [
              {
                "id":"recycbYjh3TkgZMPM",
                "fields":
                  {
                    "cover":"https://cdn.filestackcontent.com/4CPMq48IQ9e8QnC3jRPb",
                    "authors":["recVx8icxEXurDxHT"],
                    "current_sum":0,
                    "expected_sum":0,
                    "description":"Хамурапи Хамурапи Хамурапи",
                    "min_price":200,
                    "desired_price":0,
                    "pages_count":0,
                    "title":"Книга Хамурапи",
                    "id (from Authors)":[1,3],
                    "description (from Authors)":["Russian scientist and economist, doctor of economic Sciences."],
                    "avatar (from Authors)":["https://communitarian.ru/uploads/post/image/0/15/1547/11062a0e6e786f0622c02eb45e65e3ef.jpg"],
                    "email (from Authors)":["v.katasonov@ya.ru"],
                    "name (from Authors)":["Валентин Катасонов"]
                  },
                "createdTime":"2020-10-05T17:45:56.000Z"
              }
            ]
        }
      )
    )
  }),

  rest.post(POST_BOOKS_URL, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        ...JSON.parse(req.body),
        id: 1
      })
    )
  })
]
