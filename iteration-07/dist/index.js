"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var yamljs_1 = __importDefault(require("yamljs"));
var resources_1 = require("./resources");
/**
 * When in doubt check documentation
 * @see https://www.prisma.io/docs/concepts/overview/prisma-in-your-stack/rest
 *
 * Naming of the resources is inspired by:
 * @see https://laravel.com/docs/9.x/controllers#actions-handled-by-resource-controller
 *
 * @help Feeling stuck? Just check requests for examples
 */
var api = (0, express_1["default"])();
var swaggerDocument = yamljs_1["default"].load(__dirname + '/../docs/swagger.yaml');
/**
 * Show Swagger UI for API Documentation
 */
api.use('/api-docs', swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(swaggerDocument));
/**
 * Make express parse JSON in body and parse url encoded strings
 */
api.use(express_1["default"].json());
api.use(express_1["default"].urlencoded({ extended: true }));
/**
 * Serve static content from public directory for images
 */
api.use(express_1["default"].static("public"));
/**
 * Send greetings to API Client
 */
api.get('/', function (req, res) { return res.send({
    status: "success",
    data: {},
    message: "Welcome to our API"
}); });
/**
 * Resource animals
 */
api.update('/api/accommodations', resources_1.accommodations.update);
api.get('/api/accommodations', resources_1.accommodations.list);
api.post('/api/accommodations', resources_1.accommodations.store);
api.get('/animals/:id', animals.get);
/**
 * Resource reservations
 */
api.get('/requests', requests.list);
api.get('/requests/:id', requests.show);
api.patch('/requests/:id', requests.partialUpdate);
api.put('/requests/:id', requests.update);
api.post('/requests', requests.store);
api["delete"]('/requests/:id', requests.destroy);
/**
 * Start listening on connections
 */
api.listen(process.env.PORT, function () { return console.log("Example app listening on port ".concat(process.env.PORT)); });
//# sourceMappingURL=index.js.map