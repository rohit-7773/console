import { createServer, Model } from "miragejs";
import { responseUtils } from "./utils/responseUtils";
import {
  getDataList,
  updateUser,
  userLogin,
  userDelete,
  userAdd,
  getUserDataList,
} from "./utils/index";

export default function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,
    models: {
      user: Model,
      tenantUser: Model,
    },

    seeds(server) {
      server.db.loadData({
        user: [
          {
            name: "Rahul kenchi",
            description: "i am going to win the world",
            userid: "rahul123",
            email: "rahul768@gmail.com",
            password: "rahul768",
            type: "admin",
            id: 5,
          },
          {
            name: "Tushar Saxena",
            description: "i am the king of the seven worlds :)",
            userid: "tushar123",
            email: "tushar057@gmail.com",
            password: "tushar057",
            type: "tenant",
            id: 7,
          },
          {
            name: "Jeff Mathew",
            description: "i am a coding god",
            userid: "jeff1234",
            email: "jeff123@gmail.com",
            password: "jeff123",
            type: "tenant",
            id: 8,
          },
          {
            name: "Rohit singh",
            description: "i am pro gamer",
            userid: "rohit123",
            email: "rohit@gmail.com",
            password: "rohit",
            type: "tenant",
            id: 11,
          },
          {
            name: "Naveen",
            description: "i am a fan of Spiderman",
            userid: "naveen768",
            email: "naveen768@gmail.com",
            password: "naveen768",
            type: "tenant",
            id: 12,
          },
          {
            name: "harsh",
            description: "i live in indore",
            userid: "harsh768",
            email: "harsh768@gmail.com",
            password: "harsh768",
            type: "tenant",
            id: 13,
          },
          {
            name: "test1",
            description: "i live in indore",
            userid: "test1",
            email: "test1@gmail.com",
            password: "test1",
            type: "tenant",
            id: 14,
          },
          {
            name: "test11",
            description: "i live in indore",
            userid: "test11",
            email: "test11@gmail.com",
            password: "test1",
            type: "tenant",
            id: 15,
          },
          {
            name: "test12",
            description: "i live in indore",
            userid: "test12",
            email: "test12@gmail.com",
            password: "test12",
            type: "tenant",
            id: 16,
          },
          {
            name: "test14",
            description: "i live in indore",
            userid: "test14",
            email: "test14@gmail.com",
            password: "test14",
            type: "tenant",
            id: 18,
          },
          {
            name: "test15",
            description: "i live in indore",
            userid: "test15",
            email: "test15@gmail.com",
            password: "test15",
            type: "tenant",
            id: 19,
          },
          {
            name: "test21",
            description: "i live in indore",
            userid: "test21",
            email: "test21@gmail.com",
            password: "test21",
            type: "tenant",
            id: 20,
          },
          {
            name: "test22",
            description: "i live in indore",
            userid: "test22",
            email: "test22@gmail.com",
            password: "test22",
            type: "tenant",
            id: 21,
          },
          {
            name: "testify",
            description: "i live in indore",
            userid: "test2345_12",
            email: "test23@gmail.com",
            password: "test23",
            type: "tenant",
            id: 22,
          },
          {
            name: "Paras Saxena",
            description: "i am a hacker",
            userid: "paras1234",
            email: "parassaxena206@gmail.com",
            password: "parassaxena206",
            type: "tenant",
            id: 23,
          },
        ],
        tenantUser: [
          {
            id: "1",
            userName: "User1",
            email: "user1@gmail.com",
            tenantName: "Tenant1",
            createdDateTime: "Mar 01 2022 11:51:39",
            isDeleted: "false",
          },
          {
            id: "2",
            userName: "User2",
            email: "user2@gmail.com",
            tenantName: "Tenant2",
            createdDateTime: "Mar 01 2022 11:51:39",
            isDeleted: "false",
          },
          {
            id: "3",
            userName: "User3",
            email: "user3@gmail.com",
            tenantName: "Tenant3",
            createdDateTime: "Mar 01 2022 11:51:39",
            isDeleted: "false",
          },
          {
            id: "4",
            userName: "User4",
            email: "user4@gmail.com",
            tenantName: "Tenant4",
            createdDateTime: "Mar 01 2022 11:51:39",
            isDeleted: "false",
          },
          {
            id: "5",
            userName: "User5",
            email: "user5@gmail.com",
            tenantName: "Tenant5",
            createdDateTime: "Mar 01 2022 11:51:39",
            isDeleted: "false",
          },
          {
            id: "6",
            userName: "User6",
            email: "user6@gmail.com",
            tenantName: "Tenant6",
            createdDateTime: "Mar 01 2022 11:51:39",
            isDeleted: "false",
          },
          {
            id: "7",
            userName: "User7",
            email: "user7@gmail.com",
            tenantName: "Tenant7",
            createdDateTime: "Mar 01 2022 11:51:39",
            isDeleted: "false",
          },
          {
            id: "8",
            userName: "User8",
            email: "user8@gmail.com",
            tenantName: "Tenant8",
            createdDateTime: "Mar 01 2022 11:51:39",
            isDeleted: "false",
          },
          {
            id: "9",
            userName: "User9",
            email: "user9@gmail.com",
            tenantName: "Tenant9",
            createdDateTime: "Mar 01 2022 11:51:39",
            isDeleted: "false",
          },
          {
            id: "10",
            userName: "User10",
            email: "user10@gmail.com",
            tenantName: "Tenant10",
            createdDateTime: "Mar 01 2022 11:51:39",
            isDeleted: "false",
          },
          {
            id: "11",
            userName: "User11",
            email: "user11@gmail.com",
            tenantName: "Tenant11",
            createdDateTime: "Mar 01 2022 11:51:39",
            isDeleted: "false",
          },
          {
            id: "12",
            userName: "User12",
            email: "user12@gmail.com",
            tenantName: "Tenant12",
            createdDateTime: "Mar 01 2022 11:51:39",
            isDeleted: "false",
          },
        ],
      });
    },

    routes() {
      this.namespace = "/api";

      this.post("/login", (schema, request) => {
        try {
          const { requestBody } = request;
          let uniqueUser = userLogin(schema, requestBody);
          return responseUtils(200, uniqueUser);
        } catch (err) {
          return responseUtils(500);
        }
      });

      this.get("/user", (schema, request) => {
        try {
          const { type, _page, name_like } = request.queryParams;
          let { datalist, count } = getDataList(schema, type, _page, name_like);
          return responseUtils(200, { list: datalist, count: count });
        } catch (err) {
          return responseUtils(500);
        }
      });
      this.get("/tenant-user", (schema, request) => {
        try {
          const { _page, name_like } = request.queryParams;
          let { datalist, count } = getUserDataList(schema, _page, name_like);
          return responseUtils(200, { list: datalist, count: count });
        } catch (err) {
          return responseUtils(500);
        }
      });

      this.put("/user/:id", (schema, request) => {
        try {
          const { params, requestBody } = request;
          updateUser(schema, params, requestBody);
          return responseUtils(200);
        } catch (err) {
          return responseUtils(500);
        }
      });

      this.post("/user", (schema, request) => {
        try {
          const { requestBody } = request;
          userAdd(schema, requestBody);
          return responseUtils(200);
        } catch (err) {
          return responseUtils(500);
        }
      });

      this.delete("/user/:id", (schema, request) => {
        try {
          const { id } = request.params;
          userDelete(schema, id);
          return responseUtils(200);
        } catch (err) {
          return responseUtils(500);
        }
      });
    },
  });

  return server;
}
