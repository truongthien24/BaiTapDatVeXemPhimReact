import danhSachGheData from '../../Data/danhSachGhe.json'

const stateDefault = {

    danhSachGheData: [...danhSachGheData],

    danhSachGheDangDat: [
        // {"soGhe": 'A2', "gia": '2000'}
    ],

};

export const DatVeXemPhimReducer = (state = stateDefault, action) => {
    switch(action.type) {

        case 'CHON_GHE': {

            console.log(state.danhSachGheDangDat);

            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat=> gheDangDat.soGhe === action.payload.soGhe);

            if(index !== -1) {
                danhSachGheDangDatUpdate.splice(index,1);
            }else {
                danhSachGheDangDatUpdate.push(action.payload);
            }

            state.danhSachGheDangDat = danhSachGheDangDatUpdate;

            return {...state};
        }
        break;
        case 'XOA_GHE': {

            let gheXoa = action.payload;

            let danhSachGheCapNhat = state.danhSachGheDangDat.filter(ghe=>ghe.soGhe !== gheXoa.soGhe);

            state.danhSachGheDangDat = danhSachGheCapNhat;

            return {...state};
        }
        break;
        // case 'DAT_VE': {

        //     let danhSachGheData = [...state.danhSachGheData];
        //     let danhSachGheDangDat = action.payload; 
        //     for(var i = 1; i <= danhSachGheData.length; i++) {

        //         for(var j = 0; j <= danhSachGheData[i].danhSachGhe.length; j++) {
                    

        //             for(let item of danhSachGheDangDat) {
        //                 let soTT = item.soGhe;
        //                 if(danhSachGheData[i].danhSachGhe[j].soGhe === soTT) {
        //                     danhSachGheData[i].danhSachGhe[j].daDat = true;
        //                     danhSachGheDangDat = danhSachGheDangDat.filter(ds=>ds.soGhe !== item.soGhe)
        //                     // console.log('Danh sách ghế đang đặt', danhSachGheDangDat);
        //                 }
        //             }

        //         }
        //     }

        //     state.danhSachGheDangDat = danhSachGheDangDat;

        //     state.danhSachGheData = danhSachGheData;
            

        //     return {...state};
        // }
        // break;
        default: 
        return {...state};
    }
} 