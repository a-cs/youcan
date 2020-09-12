import React from 'react'

import NavHeader from '../../components/NavHeader';
import Footer from '../../components/Footer';

import "./styles.css"
import CommunityCard from '../../components/CommunityCard';


function Comunity() {


    return (
        <div >
            <NavHeader />
            <div className="community">
                <h3>Nossa <br /> Comunidade</h3>
                <h4>Criamos uma rede de pessoas dispostas a fazer a diferença no
                mundo. Nossa missão é atingir o máximo de jovens e adultos
                levando o senso do protagonismo estimulando a se conectarem com
                pessoas... </h4>
                <h3>Nosso <br /> Time</h3>
                <div className="departments">
                    <h5>Gestão</h5>
                    <div className="members">
                        <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIoNc2DwfkYVU2oQ_2KM1F9hm-3GhZ99qQolLEcr_igqgFfxN5kayXA-N4V45ZA_paIiXtouBYdmdd_BWnL1Xuo3RdkN_yNt8k4lUdP7C5ANC3mvYv7ITLWnSmTBHXFSFQjTdDBRd6ktbp74xruZ8OQH0i1ky9Ik9Y-TYiQYewgpGIdrH3mawTLiqtVbPwN6hg2rl7Ep4r0KtKsRO3iwB9BlsLyOZ1wJlE3RDHXIEsi080QuXmlXCrBVzth0jXWicIoWaubji9L-Z9LcUrCUE-9yxBKyL8_n-wu0F3Qt-ux_obQELYblgI-EqS5HSdy8942FwYXQb2aNycTGuewAhuZb1EoT4lvJRGrVAG5S7rh54_sJu5MmXTl-PW5qK2rVPXviSQvcFJCLLsvs5W7gncXVcl6aKdRBNfPMLBDm1N3d91Q8x_OCrQprl4WpVT5mVOSiHhZdjCwgCNy2jqNKl91nekvKD9sNzf2D44FyI6Keku18qyIMjBDc3Bimn7bkaNYrvS_CQLTZ4FVsR0n1MMWAWEJSTBHXyPY7M1zKvBV1ahC7Zh4lSxi1uXVAqHKLZ41Jgp-L-KUQkMiuHUwiaE0QxEUIH12rpQKRZ0iNQggqDuG_pKJn38OaNqJtRtlMiubvkEsaa6mnic-VO1iBFPLQzGONuoBUk6xPfPHuy23PXG4rMP4LUf6dQ9-AvRpwiWauJqLMi7Y5IiAb2WzQz1wIQ6elzB7p6Gw=w952-h953-ft"
                            name="Junior Rodrigues"
                            city="Curitiba"
                            state="PR"
                            role="Fundador / Business Head" />
                        <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIonLeJAiKEAtFWeKHAN4tgCMJfWSj0FQLmSKqJp5kVfrfmzxppfdPsxDjMRKRom6fntlxo88IK_PP43BR1PjXF9kTxzUoEQDqdMLBxrrylOwfgn-7tcGGkt7Q96ncE6XLkO2gtH-UobD_tarkRS5aqrwcqTSyFLYfudbGLaWA50jkvXmlqDbCvuMEt0LRn0xi8K-7u1rysFUYr0Fc6tTjk-YyPwrzV0xRF7Ral_btUhja8nwQiau6xGwM8gzhhB6-6VbwpUhFgehA6Df1idDVC0jQo-JDGi2Hsr3X6uFwSbyq7komo2YaTSQG1ADsphqDC3Iux2zAJkQRMPIAEg3SlzfBzEI2hs0GaFMyNXRAh-KVbsj9b-NKWkAL4MUv2q2ZeTA9FApEY69PCwIaCI8eUU4t-ARS-V_bLo1TCGbG9dcUg-fu1GhorVz0oUZL5YkHxcgsZckV120JXg_5PER6MA5V1k9hsE-Mp-mCQlPzfenEcVRCtKhgfm4hEW3KlbGS1EXVIZy-Jbv67dm5VwGMTGSVcqPpn4yAjWQa2FUZV-VbZgG4SpSiqtj5rszN6Laq_jRJnIbOHxcmTB4NOnLyYZOH09PQmJneOJYjZx8xpfwrhKMxVx-8Wud7atFURNx4-Is3F72XyPPfpgLxm5vvIdlsYeuJlYqXTUCMIVBgqRmG8Vo8AUqZbcZ5eTlmLNzYymQ-Y0sLSplwWvHyoV8TKdnDj78slJCyk=w200-h190-p-k-nu-ft"
                            name="Pâmella Albuquerque"
                            city="São Lourenço"
                            state="MG"
                            role="Gestão de Facilitadores" />
                    </div>
                </div>

                <div className="departments">
                    <h5>Back Office</h5>
                    <div className="members">
                        <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIq7_V0nVm2q0K8OMu7tqcYcI8LnUPtVCKLjKvP3kEJX5hekJ0rtOCs8I0g3RdcTwguPNW772Upgc3LbgqgvddkwpghIH-_uWP-LLNpY-FWppiyCIOETPjOkdvCOyFyaKsSTQ9cqfoqgHNWefgbd5DH4MvotnbICBW5GizbqTurRo4gSLIsp5dlS8U_r-fMnlMmJ32Bt6F-6P3Tb3g71a39dm91A8O6e2h9LzP_fDev2CpMPhzh1FD_clwHATXdJMIHko28iVic_350_DAw46yKSUOKmxWLVDVEmD4jN9qv1nqUDtu4LdW0Kd-b75MI4r-doWB9MsPryYSONMl4eNHda1llhdVKgENl5ZCEg0ILc6NgVfHZ5s7MLF7ZDou2z8VDI6WWY3oVvJcP-e8wBVETmAR_gsCjWz8OKpp2yLoZl08F8ubpXgh8AtHtWSONm5qtoYZ4U6G0GC5VzuOf3mC3x6z6yiu5cPGZxGwzynm7NLBFSwHfi-sEWETEpGqwNdPjRzylACy3c19X_0MvgT9NIftaGMoQrZEXd9t8RIM5Qk2IvbGu9uRgx1MjdZC7fSKwb71Xn1XUdrFfzBFsoY64c7LdR2yjDqiGIY9vqXuFXM3OFcXPCcGPdMzZfooEIBtF1Ivn9svGBfBw3Ty9x_rRnTEx68COd_PFrWTV1D1NqfGpg0_A815BStFwLj_1DUdklDJ4DQnb4JVxWgUcV2pKcs09OzLUrkg=w200-h190-p-k-nu-ft"
                            name="Camila"
                            city="Socorro"
                            state="SP"
                            role="Head" />
                        <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIo4keXSdHyraPgB7sNEMnHUtrxclfToEhek83_HYIQ8hzdD0rL3N4DtaxRZPOQDLERETlJUXzTVZ5QR1x_Z-i9tb3iRyses9uAjgeD0xKhrvZhcXrHEsX1MajkZmNHuYglKtUAeWboJJud2kZGDMtE5Hf1m9N05Ms4Tk-HhCGlGXj8ygW0goesoC5hUpYQG9tzU5M0ls13Y-2daJqKN3rHoltMFuHUPXs9YudB3xg-wKsvZghLxJ38SxlYZhG2FH2ugpevwyEpR-tMjMkq16osbzi2OB-skLaBG82M3lGmIOJjroZKgbn6ft7tvEWyHTPepldhnfHC0hn_HVErf9cjS_19_3s_b-KNhwGiUXuXlifPD9mdoUA8RaQvCHaYdC8nlC6pS1haV25yOhxc8OLU3BSVsDV5ZcE_MJmmQVpFl36mARx_7_KrqCWZ6CTt7FAPZs2Rj829howumkSCN82AqPissdKREXbY8Zywx1xsW83VPsVEKEfKVOv5n9rHwHtT-Y1PUqbUeW8M8npqyC7bh8myoYrdEk2V0Zb0ph21J53MwGLKOM4KKK5KAHTLkhLYmxXownnRz63koiXnOnBkVViLKFEW_fS_blFOs5qJhbEHnuT8VSkDY5NDRpa-aw_JXwy8OIl2DuQBvX4shbaH8WsxD_xqH5Gw9XWbRIVJJ0WuJJsEOSNvdLVmOEqSU1NJJd5o4SogOXpSQ3W9-s_33XUyIMYGfFA=w200-h190-p-k-nu-ft"
                            name="João Felipe"
                            city="Petrópolis"
                            state="RJ"
                            role="Criador de conteúdo" />
                        <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIqt2lNSIJQ0wKnlu3gegVmcN5x6HG7EYNb2sXevXMKXw7z8Qn6R2Hzz0ZGw2jayrcTGsM1xRIKmiCv3_3JtldioZxHx2Cuy-fWSM6oersSpC-uyyf5MsEebgbFdzS64Tl2Ry1VMJVHz4BfTPevAQkS-wyJAVQDZG6oGZCIRWT6MH2ch3aG_g19bp5rmTlb2z6i22j23SK1zue_9SRajYhVEbkLPeGK-l614GTa7HOsS1t3Tg548H7kNzM-0_3IzUjw8CATFfOXnly5UibyDeLQ0vgs7Hv94l4rkOHFQHwBIHoSNALP-H1bcQwobwf3fhUIaV-2HwAJQCGBS7QUn_T8hkA3J0RZCRJNhRtyLkQfnt-mLDBZ9k33dtn8h8NTqzDjt7ANzvADypy0Vfn0GW7i1XHC6dXEinSbOrcigQfPTTC-ouXTYZCYcrSnnszUZ2DyggEqfqA6AP0TcZQrOr0aHFzd0E1es_k95F3UgA-rUWInephFlY_uHcD1so2jcsOa6q6OiPrL9B28aZI_xB-Yz3w-CYvnjpeqnZXwSdCxrxG4UzxvmFVE9iZc38dWMrR1Wv7dArpknp9LjvxL-nPRQ-WcWyHFi-HsLPMccJYn1PSVzjpMAcA6lbvQXRJ2VtcFJDPqi4Ivup1N43OoZPrszmisLYRlH6A_Jad7fhpXvXaP_1nEqWtYcMuR4B8hbZSvnjrKdNQT5r2Qi3Vv_6orWEQmRpHkfPA=w200-h190-p-k-nu-ft"
                            name="Hully"
                            city="São Paulo"
                            state="SP"
                            role="Criadora de conteúdo" />
                        <CommunityCard
                            image="https://media-exp1.licdn.com/dms/image/C4D03AQGd8tqY3DRGsg/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=8WVK5AcGzvIyHzZTFnd-WvpnPk3v6G2m0cWP7WogdWU"
                            name="Bia"
                            city="São Paulo"
                            state="SP"
                            role="Designer" />
                        <CommunityCard
                            image="https://media-exp1.licdn.com/dms/image/C4D03AQGIWWPcqBsTsg/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=cBpLWkWirPQOCubmKWSenLJcbcdN7EuUDzGUU2_g7Hk"
                            name="Anderson"
                            city="Fortaleza"
                            state="CE"
                            role="Web Developer" />
                    </div>
                </div>

                <div className="departments">
                    <h5>Facilitação</h5>
                    <div className="members">
                        <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIr-aUPEhNJgGRKUdBLmOfSL3y6RnosXLiPPD1JYW7QDs1eFTFp8_Y7M1DjU2dKfpcxFoxBitIws6m-OTgh3cxQqYGXU78nUEN2iTQ1JyO4bw3zJQDYpwjUSqZcAjVEC-2S-atfG_hYcB-TgSv53xxMLjLQ_SMZyjvTlzQrL2Tl7yg813Uqhe6kbI6sZPo88GcSSiGdmefh4UlumYDlpTkQWQ6djQ0cS_v8cMjkiM7SVm0onXKLmwz2ACrOleY4cN8Yn9qF7Xr2zMkVW3cYjklYo6hcevGfAryoyjEZAT3Ffc1A_qP4B_qsS9VZchCFh0aQw6_rtYv9hJ0OJH4ZA0G8NooysCXnEdIE_EDiZfvJAlkRBEJfHS8o5G8F1JHFjNcwnjXYLXzaTRcMXV9ZbcP5Z4e02zYTcDPh-tqyrDAuXKHp83QiJjTfmtnu_9ca8BB1yel8G-uxMNfuZ1tigbXTKjYNw871bt2ELssUqWjQ-HoABWhwZ9Gl2I-qCZ364I0zswBXJMLbdA1neDjf-zAvdXEpjmPb2PZGdwZLu4dPkzodU5XbbnVLVeyOG_dMkgZn9hwN8YWvPHllY7GEwie662DmAod4CUUmdWNUt2y7Bj9w0lLked-1BXp9X8825r81tkzjc_OCJrRkwYLEpsGozvGm3RFQHOnzU7jxUkhEodnjKCM2xorfb5ByuutvN6qPZZDpSB2LRMfbC3WjVz7xDQjW8CUox=w200-h190-p-k-nu-ft"
                            name="Bárbara Braz"
                            city="Belo Horizonte"
                            state="MG"
                            role="Facilitadora" />
                        <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIqT62XXpu51qCeYwPtaTUZoUn5nuaxfKNYQNfj9WTSRv3UtBVTKYRII4v2dgBWzSFIzzpF3oTgYpXCn7ndVake0tk9Q_flXGKNtEMomGveYA_TRBfLXhEUMSDltuwdpzt2ECFr6qf1oDqasDoxs1tQZULkrVCx9tUD5D7du0wX-8u4qVkHVSFHSCfrALCvIs69-EiU7bCmI4JegzRw2BGdbDXMuwBLXhTiHFXlElKY48dtQa539ab-AdR1PaV2PgeukKQwMpgfTs0Uo5zOeQX4KGMVNKuxoiiRpsNBaH6dpxf7Ky9c1aguhiOgZODWlJFVO7ZLDQStCAuTC52md6Rs96JLQCzmt3O9_CqlkvwjrVjp-ha8zpB_SzENf-GCB9i6hrh6IrNAJiFTzbt5_lTp4T7ZAFVT2CsRuoMohKZha87fg8d-EAQPRq19507s72DruAyWhRaf2LzAHGl-Hr5l77zQ0hhOnp6LZGUkNnPGFACavoVRruds34PMOG6DI8YDiGOmj7IKcm9jkjspPUhPw12o5H9sdtAO9YE4-sZqbpMBZ5k-rGdLhFAO2Sgufq0fz-OdM8EgfxdpH_aCVjDyqfcdoKHgTBYAsXIPJDA-ysuelkdGGK6h2NetHnhN2zMnW2CfaAcCtmKdDcENZs1Sknn-79CigK2x_-XJWamuXHzVum3iW6ZjrSoCsVfm6gXczlGgpmJp6d4P00JHFVXPLRkwnPrtwytc=w200-h190-p-k-nu-ft"
                            name="Natália Souza"
                            city="São José dos Campos"
                            state="SP"
                            role="Facilitadora" />
                        <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIp8GTXt5td6u1LAPg-xz5PBsw_aoqmtwxyk7S6Apc-8ZxWP1KqyNaamMvd9O4XX4FDgPPbg5kqcA7g3KnoQ-pwUf1yQKgwydJ0z7EhUKNPJbofPFDn4WjQBvhfAY-eyysV3ujPMFH4XjuMr0uGwhj25hJ93u6wE2AZGYvdnBGdtTdgVP1a-LcA4KK7P5tiuR0s4yLudrx7gKsVNA3o8B0LcBU7ba9T1_dEIYIfjQViWcGdf95jUNjq1crVSoXcOY8HEK-OWip2x5finy_pkJuwFOUqM4BmfWXa6VSjhWwm9vf7CvkwpkLfXPuCA_djnMRehRj-0E0kJGxk0M4QHaOpI41ljOq4PuMMZ-TLPHwVT5eQFjP3E_B2CNxX7v_X2lHRuXMXuC27zUUyWcW6LLiKs60gXL_XnRxdrbzbqleofhrlScluf_FnKjimwlwyAKfIAtNv4pOszwc528ru7Fh2G8ovquItYXDm97sK0_WSLpuo7dkj4GLLJlTIAaYMjiiQkaBmkxW_ecrUO4QMQdt_ERSfiJOnecxdX3iO97XEkP0kbeX4QxMYth0ZnChz5JXYH8D7xHyDUnwgf5RuqyFtrzGLFi0L-bS90MFP4nLa67H4S4pxOzQH10gCmQaQmgPTOZXmXkv_fOiDVPnnH8MEEMp4HvU0SbYXowl52L9ktkxSwFqr-xQg7HvuNwNbPh47hXwfVhDT06C18mXEHUOzbkXFaQitSyuw=w200-h190-p-k-nu-ft"
                            name="Aldirene Narcisa"
                            city="Curitiba"
                            state="PR"
                            role="Facilitadora" />
                        <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIqKQCTAGY2JJpnPyTbiNhCImNyfr2kp2nHCqGx3GgHMzVseTDbK3hgIIevancUy8oXXINfoGTgmtfCL5MXpDP_9niMgR7vXBD3FUvZHfNPe3BBEkmqShJXaPf3hjKXnGeRyPZ3dxGiJheVL71l267rLqVakB3F6EHgWom8mRqkqpRbH8U2iutkvK47SgBTTmJ63qg8uqjbU1nwgjGPFiEXEaKl3xL2-6-5AH0FBTun0a1EUnSKAu_tSCFhnIByHza_DHwgLZrZTH4JnYHlYj49OTEQn0MJUu8KO6DxN78SPBfw1-CNv21lq7WZA0okzSoDvirLnUocTa7Zb9iOrnwV-NOV24hZMhzJKgAO4zedDFz7iTF3RRZ1AS3BHP2zmdCil6P87VCd6Xcdy89Xml1qi3OLTmdN8guPCmq9YzwIvkrHnmjTVA3MpprRbxIlUoKtrbyfacxh9OqKKJBjOOrhyKiIPrtClYjfgWHefskSSv1XrMq8mBY3HIC4jldNcnBihA5mshYy7PlAC_tZ2nBlnoRX1MosHCjTRbv43utdyoZAM7BQq0cQMH1v-hIHAbwC8nUa6IQoj70Xyoavse1ZzW2XMBvE6iHwXNig7hk1E8JhKqu0L535maFudu9Pw4u9gJK_UWS9wRBqxmgQDd89UP9WPFaoiCuhYNi1XdBcC46JaGn3fbYXO7CPk5PAibgUOBi1MSnvAXWz-lxOUvsbyMwDxZpWC6oI=w200-h190-p-k-nu-ft"
                            name="Úrsula Soares"
                            city="São Paulo"
                            state="SP"
                            role="Facilitadora" />
                            <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIox04DISMy0F77QDEuFbmIbY4fAjjuVrM2URfRBD6SqY7s4ICgLe6orT38eOtrrIbqTHHJ-UcV7zMHCk1bzVDyxaS2WdOR3eysN_VFjIdjU54eczXCg2L_9ljJtGEWQLjz7TuQNrG9_lZUgGE_FDbz5PfqcVEmfC3jWeBzGZ7FwBUNkzIa5oNTmfW0utyOMmufdHVcc9MzLyPuXOX7U9FQTR91wU7_J60NkaC60e0oN6epUGXcDvfm9ALmlh-fSip3w-gaTHf-wHpSGCu2tpyTAkI_dhZ8RWfbNLCBkFiMmes5-dXFPzlM1n0rqPFN0csr3oGvIXWIIZCltttDrr25E1UAVIdFs5OmrbUFsY7JwxgcGJgheRLpQQtcf09zANsiZU6dL3VPDEoElAUyDFDrqFUsYC_clwYr2yby6n38zz79RpvMBbM3VjKvQ33I1WTmRw7o-_6XTJDPoVE_rA1wAgj3PAtkkGqV7VG6jTSGfkFZn7mXfXhJQGhkOMJO1CGQ3zGQpQUD6QaRyy133GcwrXrjkrelVxEhkvCjgYohA_LgRihIrNHK6bvyzpf95AG0OS0sTDW0Qy37aBr2UEDXeHXIFGrKnf0ICgeagcKwg-302ya6cCraLNjFesPsRkqm4iwfWKPT287-s0lBmCcvnYTrbxmOQaiY5OmS9365YSzZYnKaDUTuRJPh9_NZ_fl82SIH7tbjR3Gwi0LS4565wBxRfqUltItQ=w200-h190-p-k-nu-ft"
                            name="Isabelle von Randow"
                            city="Vitória"
                            state="ES"
                            role="Facilitadora" />
                            <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIqshuUvQ2fRCp3yljAYPkSXzNVLjZ5HTWdA_fhfuCxPLmjGA4QxWzK1kBZT_WR4gMMGw_kkmo9Abtr6YEeIskokpgrWrqkjqRr4DARwSJZALJ7-3EuPjk73UDw7y2WTNOb1Djedn-cbNdc4aXzaHT-3CQmhm-__o2FIkyHJ4WlVSyoj1CLDUQb4ytbS8bWSkfXtFU6B-cEWzX8EjPqTbmitYU0dDoq3p_s3Dget3fBmGQncixM9zOYA-u2EWLgNSijZKrl-mT3_A_lcLAa4PkQiI3_LuX5uBmzNixJnoZpWHhDi2Jc6u58KtHGYsZA4qE6zLr_OQjkyM-z5ksGdolmuKZeK_QElM5-5MR8KxcZ46KqnR5EnQtlhuebrh-gJV6vMQCEdaDQ8n_4tAosNzLbXmtIw-aGcKutw3lklLko_VPd4-pvYnsUnM50jdLJdBfHDOVv8GTCj-UemH7TuPJ6JOKvMVE68kVh6J74YaM6l1EP_JTkfgbIXTbKp_ZVFqHJme0RpbixdsZxd0QjX3fgAVj4URZVnWSAH7iEj1QRsCFqAZdHPa4cvzVJNY_Qwhf7G02eJ0izVJrCsWbLjcmvNuCAYqOoYeeaRq84VjE1qnxT62xSUizmjZnxh9EyWJA0L5OjkQLMCPbgkB6hiSJFIKz-9IUBbkXaFLxnqfgP2KiXWykbPNd323vYRH6tQjib3NuUXaXlXCKlVoGBi3rLxe47Br18pcXQ=w200-h190-p-k-nu-ft"
                            name="Alessandra Harumi Anami"
                            city="Curitiba"
                            state="PR"
                            role="Facilitadora" />
                            <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIqoGGvX5vB0VsM4wMkkXdwXuA-nT8LRFCzePgNqEWeuTz_rxyhSSajBiAlwJ4uR9N1DYIAsOLRMc0faFRTqX8MPoaXcz78kxSEeEo1c7UkJHArmqbzAO5kV7_kDqM3uPHonmob0w_ZWhH1TnubonL-6fwx3PN_-uXjGNT4aj4Mtal0QkIlywvQGimFncPNZvgf-xjwpC126BTEEljHbzHsBMLlH2YGjmaL4OA6QMUPxQQkAoX4ulONja4SvCe_p4ZTXjfFi7Gb016iDYvDsJjuuPDAPgfYewgHxijDEVwTyHuEzYkOTB9y1gIgIYNI5WDQaDyrUs-3guHIcN612Wb5DRSRg-B7DWi9941JpeSKD9QvASEmhYqqyyQbKzzXMglE1yMHTYiRYKWJwcvfU075ODskMJjJecjq_r2bNxvkxI_3TDEqkIuNfu3Bb2plTEZUfFT-CwhK57bnTDybDcl9ZqbNq-iTAOKknb7blEgqScoAaSngGxzmzX0aIuyl6sFgHsipsokpc45-E9ERC9H616RUjpUYJi9VC6FHdIE5F4Oi8FAtyEV_FZoxDnJcIQcFnEYYDExpMGIGnfd9NWPdIz2VNApX0rg2-XBF0tTpS2O3Wqb-4j5xQYbaqr6520XeFWElIsaLREoKChgvTTA45Tq4SaRrM8qFlM3W5R8AuZAbQlpQTou0x6V4V687qnW60ubhkldXRBf-vU02w42dzs9hh8Tgo3Aw=w200-h190-p-k-nu-ft"
                            name="Clara Saar"
                            city="Belo Horizonte"
                            state="MG"
                            role="Facilitadora" />
                            <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIp7M-nqjdq_XIwYloFCAbAKK61wvvQplbT8pbUxWI3DHxTaXAwiLWnx_YWnes_0RK00HjpebIPy2W9ypELDKvFMzVHuFkXaxYxqp470UuQWhR6RjE0fvYwjkDTzeupdd8PE1PyfcBcbqZeIkkJEj-C1MG_KQTSEiRfeVqkbPyVOrw6eGlJl53xKD2bisoXMSR_1t2PDqLVpQuTSweDyMgrRL-XOnJ2MINt9dv8P1VYbXhEs-LRGHjdfl6vcqkXq9R0TuhzW8l87Wn8cnTjFd3KUvr2Vte4vMmq2XamCh4BQ4CcgykGXOiFDboVjwMpW5VXjyxyndqCo11m3KGtIvy0TMG08U18ssmZwg8fukbPYU5Vqkjh4jYW1cqPXwUnq8oFrJ_uZcej80n7gJo8Z0vDIdxCzZJJUxDjlOGv9ykF6O60XgLyIIGfgU8TDz_3Dnk8UbmNnO6-SOuRRLi3GqFoKb_kzpkA7hbFdNU_-m_6i8dxgHiAtuKuZDHV3laqLpjqzZDbhX7bM5xwpudru3k0q-XGiizlGaiCWvXXgtl_4gqG4B-gUBj3I7rf2Uc6oJMgh04L-MrwvypH8XvVrTBYxb_J_ty4nM66mlweAuZpHgv4OjuQLNwKrmLI7gl67Z_zjpzqz_QJYsqdqb42WfbIZ8T3PvW-We9sOG5nSjLWCV31OUlSZ0V17zyzpVY5UFADPfkgWMhv-cFAkQ8fi2HbCm0j6qmLUmQM=w200-h190-p-k-nu-ft"
                            name="Jonathan William"
                            city="São José dos Pinhais"
                            state="PR"
                            role="Facilitador" />
                    </div>
                </div>

                <div className="departments">
                    <h5>Social Network</h5>
                    <div className="members">
                        <CommunityCard
                            image="https://lh3.googleusercontent.com/fife/ABSRlIoOJz4sbSsuJsW-3YPTA9YCKvDDo6pWjg72SAg4I7gL-kiW5MAK7zj1yKYgrTO9pnYoG2NIXAPQwbTYhP9MCf6D_ZUmwk8PJsrMkuHc-u7lR1Qmd0VxiEKOTli_fUD7jdRWvkg1KLA36Bpm6YRAtwzo9R5xEEffOr0CmdaDEbj2HMNUu6ANVbqDwHqq0Vk8fqy3KNREkzieahxBcvk5pKHOwl86kwTpGweAmNWFrEuesGAchQuLIVqi73vTu2bRI7X9dQWMEcSM6JZKnvgQ2NS3SGX3VpZhPPY50WLTY8-rMivlLMobZa2f9XPU2LTnGzZm0j6jiVwQpUtFKCYwR0VnIfe2pdf0yAWmddhpMb0IYlak0IqblWbbnLgRRh_xFzR1HxBA6_t9oSt5LUfMstvQPmU6gHtlxqe1_K_OG7RMQ3dOFnJQ-Z3tssFQcyQm0HXyiUkZztu8AoLllb1QoHLzfdrxj1M9UBsGI9uGQ0ztzkCDuMCwXnleX_pKD4xkP7hHC4Gm9ImTrsyE7-LwWZ6g3NW3POHEyG0nZ4ZOAk66xQZmmKa053iwBelRQOkoaaRzxTXRaxJ83wp2N1gKKNoptsYRWSbA7S6t5G3CTlu3rBKiJ4ibDJedfS6fzgpjAZuMfFQUTllKRBOZr2YUZMof46IIprmHkLYa9bckMln2TrfB735zicpcS9RUB1If_gKoYYzZOLesdPlkXhI0KQdQyntqjqWPbyQ=w200-h190-p-k-nu-ft"
                            name="Isabella Victorino"
                            city="Rio de Janeiro"
                            state="RJ"
                            role="Community Manager" />

                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Comunity
