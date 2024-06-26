const Sequelize = require('sequelize');

module.exports = class Bookmark extends Sequelize.Model {
    static init(sequelize) {
        return super.init( { // init 메서드: 모델 정의를 초기화, 데이터베이스에 연결된 Sequelize 인스턴스를 나타내는 sequelize 객체를 인수로 함
            bm_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true 
            },
            agentList_ra_regno: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            resident_r_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            }
        },
        {
            sequelize, // Sequelize 인스턴스 지정
            timestamps: false, // Sequelize가 모델에 타임스탬프(createdAt 및 updatedAt)를 포함하지 않음
            underscored: false, // 낙타 표기법 속성 이름을 스네이크 케이스로 변환
            modelName: 'bookmark',
            tableName: "bookmark",
            paranoid: false, // 레코드를 실제로 삭제하지 않고 삭제로 표시하는 소프트 삭제 false
            charset: 'utf8mb4', // 테이블의 문자 집합을 지정 - 이모지 및 기타 특수 문자를 저장할 수 있도록 'utf8mb4'로 설정
            collate: 'utf8mb4_general_ci', // 테이블의 콜레이션을 지정 - 유니코드 대소문자 구분 정렬을 나타내는 'utf8mb4_general_ci'로 설정
        });
    }
    static associate(db) { }
}