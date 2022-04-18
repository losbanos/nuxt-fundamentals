import {StoreOptions} from 'vuex';

const postsOptions: StoreOptions<any> = {
    state: () => ({
        all: [
            {
                id: 'random_1',
                title: '의무교육이란?',
                content: '의무교육은 무상으로 한다. 국회의원과 정부는 법률안을 제출할 수 있다. 대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다. 대법원장은 국회의 동의를 얻어 대통령이 임명한다. 국가는 청원에 대하여 심사할 의무를 진다. ' +
                    '법관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다. 탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다. 대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수 있다.'
            },
            {
                id: 'random_2',
                title: '국민요건',
                content: '대한민국의 국민이 되는 요건은 법률로 정한다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이 임명한다.국가는 평생교육을 진흥하여야 한다. 정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다. 국무위원은 국무총리의 제청으로 대통령이 임명한다.제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다. 다만, 대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.'
            },
            {
                id: 'random_3',
                title: 'Lorem title',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien nibh, pharetra id imperdiet eget, consequat at est. Duis tristique, leo porttitor malesuada dapibus, odio felis maximus mauris, nec sollicitudin ante urna fermentum velit. Suspendisse id velit posuere, efficitur nibh non, dictum lectus. Sed finibus, magna non maximus bibendum, nibh est pellentesque tellus, consequat tristique purus neque eget leo. Curabitur ex nibh, pharetra non faucibus dictum, mattis a augue. Nulla molestie odio et eros auctor, vel ultrices mi vestibulum. Nam pulvinar semper massa vel imperdiet.'
            }
        ]
    })
}

export default postsOptions;
