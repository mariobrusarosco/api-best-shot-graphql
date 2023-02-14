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
Object.defineProperty(exports, "__esModule", { value: true });
const League = {
    members: (parent, args, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
        const leagueMembers = parent.members;
        const allMembers = yield dataSources.bestShotAPI.getAllMembers();
        // const filteredMembers = allMembers.reduce((prevMember: any, acc: any) => {
        //   return leagueMembers.includes(prevMember._id)
        //     ? [...acc, { ...prevMember, id: prevMember._id }]
        //     : acc;
        // }, []);
        const filteredMembers = allMembers.reduce((acc, member) => {
            const isMember = leagueMembers.includes(member._id);
            return isMember ? [...acc, Object.assign(Object.assign({}, member), { id: member._id })] : acc;
        }, []);
        console.log({ filteredMembers });
        return filteredMembers;
    }),
};
exports.default = League;
