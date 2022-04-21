"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.get = exports.store = exports.list = void 0;
var yup_1 = require("yup");
var client_1 = __importDefault(require("../client"));
/**
 * @todo 1. Implement endpoints for listing animals, start with basic list
 * @see https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-express
 * Requirement: Browse animals
 *
 *
 * @todo 2. Once you have endpoint for getting animals output only one's that aren't adopted
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/filtering-and-sorting
 * Requirement: Browse animals
 *
 *
 * @todo 3. Create filter for isRequested, isAdopted and type also implement limit which is by
 *          default 10 animals.
 * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findmany
 * Requirement: Filter animals by type
 *
 *
 * As you can see there are many filters that can be implemented
 */
var list = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var isRequested, limit, type, types, animals;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                isRequested = req.query.isRequested || false;
                limit = +(req.query.limit || 10);
                type = req.query.type + '';
                types = ["dog", "cat"];
                return [4 /*yield*/, client_1["default"].animal.findMany({
                        where: {
                            acceptedRequestId: {
                                not: isRequested ? null : undefined
                            },
                            adoptedAt: null,
                            type: types.includes(type) ? type : undefined
                        },
                        take: limit
                    })];
            case 1:
                animals = _a.sent();
                return [2 /*return*/, res.send({
                        status: "success",
                        data: animals
                    })];
        }
    });
}); };
exports.list = list;
/**
 * @todo Create schema for validating animal object before inserting into database, play around different
 *       validators, for type use matches and regex. Feel free to also include some defaults.
 * @see https://github.com/jquense/yup
 */
var accommodationSchema = (0, yup_1.object)({
    name: (0, yup_1.string)().required(),
    description: (0, yup_1.string)().min(10)["default"]("Popis bude pridaný"),
    mainPhoto: (0, yup_1.string)().required(),
    hostId: (0, yup_1.string)().required(),
    location: (0, yup_1.string)().required(),
    addedAt: (0, yup_1.date)().required(),
    price: (0, yup_1.number)().required()
});
/**
 * @todo 1. Add animal into database
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/crud#create
 * Requirement: Add animal
 *
 * @todo 2. Check the animal before inserting into database and return correct http status
 *       By checking the instance of error for ValidationError send correct status code
 *       otherwise send generic error.
 * @see https://http.cat/
 */
var store = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, accommodation, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, accommodationSchema.validate(req.body)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, client_1["default"].accomodation.create({
                        data: data
                    })];
            case 2:
                accommodation = _a.sent();
                return [2 /*return*/, res.status(201).send({
                        status: "success",
                        data: accommodation,
                        message: "Accommodation stored in system"
                    })];
            case 3:
                e_1 = _a.sent();
                if (e_1 instanceof yup_1.ValidationError) {
                    return [2 /*return*/, res.status(400).send({
                            status: "error",
                            data: e_1.errors,
                            message: e_1.message
                        })];
                }
                return [2 /*return*/, res.status(500).send({
                        status: "error",
                        data: {},
                        message: "Something went wrong"
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.store = store;
/**
 * Optional
 *
 * @todo Find animal by id
 * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findunique
 *
 * @todo If no animal is found then return 404 and corresponding message with empty data
 * @see https://expressjs.com/en/guide/error-handling.html
 *
 * You might ask why do we want to return 404 on single animal and not on list?
 * Well, we are expecting a single result, which should contain some data, the list
 * is returned but it's empty because the server might not found the data that matched
 * our criteria.
 */
var get = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, animal;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, client_1["default"].animal.findUnique({
                        where: {
                            id: id
                        }
                    })];
            case 1:
                animal = _a.sent();
                if (!animal) {
                    return [2 /*return*/, res.status(404).send({
                            status: "error",
                            data: {},
                            message: "Animal was not found"
                        })];
                }
                return [2 /*return*/, res.send({
                        status: "sucess",
                        data: animal
                    })];
        }
    });
}); };
exports.get = get;
//# sourceMappingURL=accomodations.js.map