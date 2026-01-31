import { Car, Briefcase, HeartPulse, Scale, ShieldAlert, Truck, Bike, Footprints, Gauge, Smartphone, AlertTriangle, Zap, ArrowLeftRight } from 'lucide-react';
import { NavItem, PracticeArea, Attorney, CaseResult, Testimonial, Language } from './types';

export const NAV_ITEMS: Record<Language, NavItem[]> = {
  en: [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ],
  ko: [
    { label: '홈', href: '/' },
    { label: '소개', href: '/about' },
    { label: '문의하기', href: '/contact' },
  ],
  zh: [
    { label: '首页', href: '/' },
    { label: '关于我们', href: '/about' },
    { label: '联系我们', href: '/contact' },
  ],
  es: [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/about' },
    { label: 'Contacto', href: '/contact' },
  ]
};

const PRACTICE_AREAS_BASE = [
  {
    id: '1',
    icon: Car,
    imageUrl: 'https://sonlawfirmco.com/wp-content/uploads/2024/03/01.jpg',
  },
  {
    id: '2',
    icon: AlertTriangle,
    imageUrl: 'https://sonlawfirmco.com/wp-content/uploads/2024/03/02.jpg',
  },
  {
    id: '3',
    icon: Footprints,
    imageUrl: 'https://sonlawfirmco.com/wp-content/uploads/2024/03/03.jpg',
  },
  {
    id: '4',
    icon: Bike,
    imageUrl: 'https://sonlawfirmco.com/wp-content/uploads/2024/03/04.jpg',
  },
  {
    id: '5',
    icon: Gauge,
    imageUrl: 'https://sonlawfirmco.com/wp-content/uploads/2024/03/05.jpg',
  },
  {
    id: '6',
    icon: Smartphone,
    imageUrl: 'https://sonlawfirmco.com/wp-content/uploads/2024/03/06.jpg',
  },
  {
    id: '7',
    icon: Truck,
    imageUrl: 'https://sonlawfirmco.com/wp-content/uploads/2024/03/07.jpg',
  },
  {
    id: '8',
    icon: ArrowLeftRight,
    imageUrl: 'https://sonlawfirmco.com/wp-content/uploads/2024/03/08.jpg',
  },
  {
    id: '9',
    icon: Zap,
    imageUrl: 'https://sonlawfirmco.com/wp-content/uploads/2024/03/09.jpg',
  },
  {
    id: '10',
    icon: ShieldAlert,
    imageUrl: 'https://sonlawfirmco.com/wp-content/uploads/2024/03/10.jpg',
  }
];

export const PRACTICE_AREAS: Record<Language, PracticeArea[]> = {
  en: PRACTICE_AREAS_BASE.map((base, index) => {
     const enData = [
       { title: 'Car Accidents', description: 'With so much commuter and vacationer traffic on Colorado streets at all times, accidents can be caused for any reason. Factors such as speeding, failing to yield, and driving under the influence of drugs or alcohol can cause serious accidents. It is important to consult with a skilled attorney to learn about your options for monetary compensation.' },
       { title: 'Hit-and-Run Accidents', description: 'If you were injured in a hit-and-run accident, it is possible to recover compensation from your own uninsured or underinsured insurance coverage. Contact the Colorado personal injury lawyers at Son Law Firm for a free consultation.' },
       { title: 'Pedestrian Accidents', description: 'With so much pedestrian traffic throughout the State of Colorado, it is possible to get hurt in a wide range of accidents. Common accidents include cars failing to yield in crosswalks, on sidewalks, streets, and parking lots. Contact our firm with any questions regarding personal injury lawsuits.' },
       { title: 'Bicycle Accidents', description: 'Bicyclists in Colorado run the risk of serious injury while riding along city streets. Our firm can answer questions about pursuing compensation from dangerous, distracted or aggressive drivers who hit and injure cyclists.' },
       { title: 'Speeding Accidents', description: 'One of the most common causes of car accidents is speeding. The Colorado personal injury attorneys at Son Law Firm work diligently to hold responsible those who put themselves above the law and put others at risk by speeding or driving recklessly.' },
       { title: 'Distracted Driving Accidents', description: 'Distractions such as texting, talking on a cell phone, using the GPS system, selecting music, putting on makeup, eating, and watching videos can cause serious accidents. If you or a loved one were injured in an accident caused by a distracted or negligent driver, it is important to seek the maximum compensation possible for your injuries.' },
       { title: 'Commercial Vehicle Accidents', description: 'At Son Law Firm, our Colorado personal injury attorneys provide skilled representation to injured individuals hurt in accidents involving buses, landscaping vehicles, utility maintenance vehicles, taxis, and other commercially-owned vehicles.' },
       { title: 'Head-On and Crossover', description: 'Head-on and crossover collisions can be caused by drivers illegally swerving onto the center lane or trying to pass another vehicle. These accidents can be severe and lead to serious injuries. Contact a lawyer at Son Law Firm for a free consultation to discuss your case.' },
       { title: 'Rear-End Collisions', description: 'Rear-end collisions are most often caused by driver error or weather conditions. This type of collision can cause serious injuries such as whiplash. Do not hesitate to schedule a free consultation with an experienced Colorado car accident attorney to learn more about your options for monetary compensation.' },
       { title: 'T-Bone Accidents', description: 'The Colorado car accident lawyers at Son Law Firm provide skilled representation to individuals injured in T-bone accidents. These side-impact automobile crashes are commonly caused by negligent drivers running a red light or stop sign.' },
     ];
     return { ...base, ...enData[index], fullDescription: enData[index].description };
  }),
  ko: PRACTICE_AREAS_BASE.map((base, index) => {
     const koData = [
       { title: '자동차 사고', description: '부주의한 운전자로 인한 피해자를 대변합니다. 양보 불이행 및 음주 운전과 같은 요인은 심각한 사고를 유발할 수 있습니다.', fullDescription: '자동차 사고는 순식간에 삶을 바꿀 수 있습니다. 손 법률 사무소는 사고가 가져오는 신체적, 정서적, 재정적 피해를 깊이 이해하고 있습니다.', topics: ['후방 추돌', '교차로 사고', '다중 충돌'] },
       { title: '뺑소니 사고', description: '뺑소니 사고로 부상을 입은 경우, 본인의 무보험 또는 과소보험 보상을 통해 보상을 받을 수 있도록 도와드립니다.', fullDescription: '뺑소니 피해자가 되는 것은 이중의 고통입니다. 저희는 무보험 운전자(UM) 보상 청구를 전문으로 합니다.', topics: ['주차장 뺑소니', '신원 미상 차량'] },
       { title: '보행자 사고', description: '횡단보도, 인도, 도로 및 주차장에서 차량이 양보하지 않아 발생하는 사고를 다룹니다.', fullDescription: '보행자는 차량에 대해 무방비 상태입니다. 저희는 부주의한 운전자에 의해 부상을 입은 보행자를 위해 싸웁니다.', topics: ['횡단보도 위반', '인도 사고'] },
       { title: '자전거 사고', description: '자전거 운전자를 치고 부상을 입힌 위험하고, 주의가 산만하거나, 공격적인 운전자로부터 보상을 청구합니다.', fullDescription: '자전거 운전자도 차량과 동일한 도로 권리를 가집니다. 개문 사고 및 안전 거리 미확보 사건을 다룹니다.', topics: ['개문 사고', '자전거 도로 침범'] },
       { title: '과속 사고', description: '과속으로 타인을 위험에 빠뜨린 운전자에게 책임을 묻기 위해 성실히 일합니다.', fullDescription: '속도는 사고의 심각성에 큰 영향을 미칩니다. 저희는 상대 운전자의 과속을 입증하기 위해 데이터를 활용합니다.', topics: ['고속도로 사고', '난폭 운전'] },
       { title: '부주의 운전 사고', description: '문자 메시지, 전화 사용 및 기타 주의 산만 행위는 심각한 사고를 유발합니다. 최대 보상을 추구합니다.', fullDescription: '부주의 운전은 예방 가능한 사고의 주된 원인입니다. 사고 당시 기기 사용 여부를 입증합니다.', topics: ['운전 중 문자', 'SNS 사용'] },
       { title: '상업용 차량 사고', description: '버스, 조경 차량, 유틸리티 유지 보수 차량 등과 관련된 사고에 대한 전문적인 대리.', fullDescription: '상업용 차량 사고는 복잡합니다. 저희는 이러한 복잡한 문제를 해결할 전문 지식을 갖추고 있습니다.', topics: ['배달 트럭', '공사 차량'] },
       { title: '정면 충돌 사고', description: '가장 치명적인 사고 유형 중 하나입니다. 피해자를 위해 최대 보상을 위해 싸웁니다.', fullDescription: '정면 충돌은 가장 격렬한 충돌 유형 중 하나이며, 종종 삶을 바꾸는 부상을 초래합니다.', topics: ['역주행', '중앙선 침범'] },
       { title: '후방 추돌 사고', description: '저속에서도 후방 추돌은 심각한 편타성 손상(whiplash)과 척추 부상을 유발할 수 있습니다.', fullDescription: '보험사는 종종 후방 추돌을 경미하게 취급하지만, 저희는 그 심각성을 잘 알고 있습니다.', topics: ['편타성 손상', '급제동'] },
       { title: '측면 충돌 (T-Bone)', description: '신호 위반이나 정지 표지판 무시로 인해 발생하는 측면 충돌 사고입니다.', fullDescription: '측면 충돌은 특히 위험합니다. 저희는 신호 체계와 목격자 진술을 조사합니다.', topics: ['신호 위반', '교차로 안전'] },
     ];
     return { ...base, ...koData[index] };
  }),
  zh: PRACTICE_AREAS_BASE.map((base, index) => {
    const zhData = [
       { title: '汽车事故', description: '为疏忽司机的受害者提供代理。未能让行和酒后驾驶等因素可能导致严重事故。', fullDescription: '车祸可能会瞬间改变您的生活。在孙律师事务所，我们了解碰撞造成的身体、情感和经济损失。', topics: ['追尾碰撞', '十字路口事故', '多车连环相撞'] },
       { title: '肇事逃逸', description: '如果您在肇事逃逸中受伤，我们帮助您通过自己的未投保或投保不足保险获得赔偿。', fullDescription: '成为肇事逃逸的受害者感觉像是双重不公。我们专注于处理未投保驾驶人 (UM) 保险。', topics: ['停车场肇事逃逸', '不明车辆事故'] },
       { title: '行人事故', description: '常见事故包括汽车在人行横道、人行道、街道和停车场未能让行。', fullDescription: '行人面对车辆没有任何保护。我们为被疏忽司机撞伤的行人而战。', topics: ['人行横道违规', '人行道伤害'] },
       { title: '自行车事故', description: '向撞伤骑行者的危险、分心或攻击性司机寻求赔偿。', fullDescription: '骑行者拥有与机动车相同的道路权。我们处理涉及“开门杀”和不安全超车的案件。', topics: ['开门事故', '自行车道障碍'] },
       { title: '超速事故', description: '努力追究那些凌驾于法律之上并通过超速危及他人的人的责任。', fullDescription: '速度是事故严重程度的主要因素。我们利用数据证明对方司机超速。', topics: ['高速公路碰撞', '鲁莽驾驶'] },
       { title: '分心驾驶', description: '发短信、打电话和其他干扰会导致严重事故。我们寻求最高赔偿。', fullDescription: '分心驾驶是可预防事故的主要原因。我们证明司机当时正在使用设备。', topics: ['开车发短信', '使用社交媒体'] },
       { title: '商用车辆事故', description: '涉及公共汽车、景观车辆和公用事业维修车辆的事故的专业代理。', fullDescription: '涉及商用车辆的事故很复杂。我们拥有处理这些复杂问题的专业知识。', topics: ['送货卡车', '拼车事故'] },
       { title: '正面碰撞', description: '这通常是最致命的事故。我们为这些毁灭性碰撞的受害者争取最大赔偿。', fullDescription: '正面碰撞是最猛烈的碰撞类型之一，通常导致改变生活的伤害。', topics: ['逆行', '越过中心线'] },
       { title: '追尾碰撞', description: '即使在低速下，追尾碰撞也会导致严重的挥鞭伤和脊柱损伤。', fullDescription: '保险公司经常试图将追尾碰撞轻描淡写，但我们了解其真实后果。', topics: ['挥鞭伤', '急刹车'] },
       { title: '侧面碰撞', description: '通常由疏忽司机闯红灯或停车标志引起的侧面碰撞。', fullDescription: '侧面碰撞特别危险。我们调查交通信号和证人证词。', topics: ['闯红灯', '路口安全'] },
    ];
    return { ...base, ...zhData[index] };
  }),
  es: PRACTICE_AREAS_BASE.map((base, index) => {
    const esData = [
       { title: 'Accidentes de Auto', description: 'Representación para víctimas de conductores negligentes. Factores como no ceder el paso y conducir bajo la influencia pueden causar accidentes graves.', fullDescription: 'Los accidentes automovilísticos pueden cambiar su vida en un instante. Entendemos el costo físico, emocional y financiero.', topics: ['Choques por alcance', 'Accidentes en intersecciones'] },
       { title: 'Atropello y Fuga', description: 'Si resultó herido en un atropello y fuga, le ayudamos a recuperar una compensación de su propia cobertura de seguro.', fullDescription: 'Ser víctima de un atropello y fuga es una doble injusticia. Nos especializamos en la cobertura de automovilistas no asegurados.', topics: ['Accidentes en estacionamientos', 'Vehículos fantasmas'] },
       { title: 'Accidentes de Peatones', description: 'Incluyen autos que no ceden el paso en cruces peatonales, aceras, calles y estacionamientos.', fullDescription: 'Los peatones no tienen protección contra un vehículo. Luchamos por los peatones golpeados por conductores negligentes.', topics: ['Violaciones de cruce peatonal', 'Lesiones en aceras'] },
       { title: 'Accidentes de Bicicleta', description: 'Buscando compensación de conductores peligrosos o distraídos que golpean y lesionan a ciclistas.', fullDescription: 'Los ciclistas tienen los mismos derechos en la carretera. Manejamos casos de "puertazos" y rebases inseguros.', topics: ['Accidentes de puerta', 'Obstrucciones de carril bici'] },
       { title: 'Accidentes por Exceso de Velocidad', description: 'Trabajando diligentemente para responsabilizar a quienes se ponen por encima de la ley y ponen a otros en riesgo.', fullDescription: 'La velocidad es un factor importante en la gravedad de los accidentes. Utilizamos datos para probar la negligencia.', topics: ['Choques en autopista', 'Conducción imprudente'] },
       { title: 'Conducción Distraída', description: 'Enviar mensajes de texto y usar el teléfono causa accidentes graves. Buscamos la compensación máxima.', fullDescription: 'La conducción distraída es una causa principal de accidentes prevenibles. Probamos el uso del dispositivo.', topics: ['Textear al conducir', 'Uso de redes sociales'] },
       { title: 'Vehículos Comerciales', description: 'Representación calificada para accidentes que involucran autobuses y vehículos de mantenimiento.', fullDescription: 'Los accidentes con vehículos comerciales son complejos. Tenemos la experiencia para navegarlos.', topics: ['Camiones de reparto', 'Vehículos de construcción'] },
       { title: 'Choques Frontales', description: 'A menudo son los accidentes más mortales. Luchamos por la compensación máxima para las víctimas.', fullDescription: 'Las colisiones frontales son violentas y a menudo resultan en lesiones que alteran la vida.', topics: ['Conducción en sentido contrario', 'Cruce de línea central'] },
       { title: 'Choques Traseros', description: 'Incluso a bajas velocidades, pueden causar latigazo cervical severo y lesiones en la columna.', fullDescription: 'Las aseguradoras minimizan estos choques, pero conocemos la realidad de las lesiones.', topics: ['Latigazo cervical', 'Frenado brusco'] },
       { title: 'Accidentes Laterales', description: 'Choques de impacto lateral comúnmente causados por conductores que se pasan los semáforos en rojo.', fullDescription: 'Las colisiones laterales son peligrosas. Investigamos la sincronización de las señales.', topics: ['Pasarse la luz roja', 'Seguridad en intersecciones'] },
    ];
    return { ...base, ...esData[index] };
  })
};

const ATTORNEY_BASE = {
  id: '1',
  imageUrl: 'https://sonlawfirmco.com/wp-content/uploads/2025/10/KakaoTalk_20251020_134810392.jpg',
};

export const ATTORNEYS: Record<Language, Attorney[]> = {
  en: [{
    ...ATTORNEY_BASE,
    name: 'EunYoung Son',
    role: 'Founding Partner',
    bio: 'EunYoung Son has been practicing in the Denver metro area since 2008. Beginning her first year of law school through the end of the second year, EunYoung clerked for a personal injury firm in downtown Denver.',
    education: [{ degree: 'J.D.', school: 'University of Denver, Sturm College of Law, 2008' }, { degree: 'B.A.', school: 'Duke University, 2004' }],
    admissions: ['Colorado, 2008'],
    quote: '"Although every case is different, seeing the many possibilities and outcomes a case can take early in my career shaped how I advocate for my clients today."',
    highlights: [{ title: 'Trial Experience', text: 'Five years practicing immigration and family law, representing clients in removal proceedings.' }, { title: 'Specialized Focus', text: 'Six years dedicated exclusively to personal injury law before founding Son Law Firm in 2021.' }],
    closing: 'With a background that spans trust and estates, family law, and high-stakes personal injury litigation, EunYoung brings a comprehensive and compassionate perspective to every client she represents.',
    personalNote: '"In her free time, she enjoys working out, eating, and spending time with family and friends."'
  }],
  ko: [{
    ...ATTORNEY_BASE,
    name: '손은영 (EunYoung Son)',
    role: '대표 변호사',
    bio: '손은영 변호사는 2008년부터 덴버 지역에서 변호사로 활동해 왔습니다. 로스쿨 재학 시절부터 덴버 다운타운의 상해 전문 로펌에서 실무 경험을 쌓았습니다.',
    education: [{ degree: 'J.D. (법무박사)', school: '덴버 대학교 법과대학 (University of Denver), 2008' }, { degree: 'B.A. (학사)', school: '듀크 대학교 (Duke University), 2004' }],
    admissions: ['콜로라도, 2008'],
    quote: '"모든 사건은 다르지만, 초기 경력에서 경험한 다양한 사건의 가능성과 결과들은 오늘날 제가 의뢰인을 대변하는 방식의 밑거름이 되었습니다."',
    highlights: [{ title: '재판 경험', text: '5년 동안 이민법 및 가정법 변호사로 활동하며 추방 재판 등 다양한 법정 경험 축적.' }, { title: '전문 분야 집중', text: '2021년 손 법률 사무소를 설립하기 전 6년 동안 오직 인신 상해법에만 전념했습니다.' }],
    closing: '상속, 가정법, 그리고 고액의 인신 상해 소송에 이르는 다양한 배경을 바탕으로, 손은영 변호사는 모든 의뢰인에게 포괄적이고 따뜻한 법률 서비스를 제공합니다.',
    personalNote: '"여가 시간에는 운동과 맛집 탐방, 그리고 가족 및 친구들과 함께 시간 보내는 것을 즐깁니다."'
  }],
  zh: [{
    ...ATTORNEY_BASE,
    name: '孙恩英 (EunYoung Son)',
    role: '创始合伙人',
    bio: '孙恩英律师自2008年起在丹佛都会区执业。在法学院期间，她就在丹佛市中心的人身伤害律师事务所积累了丰富的实习经验。',
    education: [{ degree: '法学博士 (J.D.)', school: '丹佛大学法学院, 2008' }, { degree: '文学学士 (B.A.)', school: '杜克大学, 2004' }],
    admissions: ['科罗拉多州, 2008'],
    quote: '“虽然每个案件都不同，但在我职业生涯早期看到的案件发展的多种可能性和结果，塑造了我今天为客户辩护的方式。”',
    highlights: [{ title: '庭审经验', text: '五年移民法和家庭法执业经验，在驱逐出境程序中代表客户。' }, { title: '专注领域', text: '在2021年创立孙律师事务所之前，专注于人身伤害法长达六年。' }],
    closing: '凭借在信托与遗产、家庭法和高风险人身伤害诉讼方面的背景，孙律师为她代理的每一位客户带来了全面而富有同情心的视角。',
    personalNote: '“在空闲时间，她喜欢健身、品尝美食，以及与家人朋友共度时光。”'
  }],
  es: [{
    ...ATTORNEY_BASE,
    name: 'EunYoung Son',
    role: 'Socia Fundadora',
    bio: 'EunYoung Son ha ejercido en el área metropolitana de Denver desde 2008. Comenzó su carrera legal trabajando en un bufete de lesiones personales en el centro de Denver.',
    education: [{ degree: 'Doctorado en Jurisprudencia', school: 'Universidad de Denver, 2008' }, { degree: 'Licenciatura', school: 'Universidad de Duke, 2004' }],
    admissions: ['Colorado, 2008'],
    quote: '"Aunque cada caso es diferente, ver las muchas posibilidades y resultados que un caso puede tomar al principio de mi carrera formó cómo defiendo a mis clientes hoy."',
    highlights: [{ title: 'Experiencia en Juicios', text: 'Cinco años practicando leyes de inmigración y familia.' }, { title: 'Enfoque Especializado', text: 'Seis años dedicados exclusivamente a la ley de lesiones personales antes de fundar Son Law Firm en 2021.' }],
    closing: 'Con experiencia que abarca fideicomisos, derecho familiar y litigios de lesiones personales de alto riesgo, EunYoung aporta una perspectiva integral y compasiva.',
    personalNote: '"En su tiempo libre, le gusta hacer ejercicio, comer y pasar tiempo con familiares y amigos."'
  }]
};

export const CASE_RESULTS: Record<Language, CaseResult[]> = {
  en: [
    { amount: 'Millions', type: 'Recovered', description: 'Obtained millions of dollars in financial compensation.' },
    { amount: 'Success', type: 'Car Accidents', description: 'Significant settlements secured for victims of collisions.' },
    { amount: 'Won', type: 'Pedestrian Injury', description: 'Full policy limits recovered for pedestrians.' },
    { amount: 'Secured', type: 'Hit & Run', description: 'Successful recovery of damages through UM coverage.' },
  ],
  ko: [
    { amount: '수백만 달러', type: '보상금 회수', description: '심각한 부상을 입은 의뢰인을 위해 수백만 달러의 보상금을 확보했습니다.' },
    { amount: '성공', type: '자동차 사고', description: '추돌 사고 피해자를 위한 상당한 합의금 확보.' },
    { amount: '승소', type: '보행자 상해', description: '보행자 사고 피해자를 위한 보험 한도 전액 보상.' },
    { amount: '확보', type: '뺑소니 사고', description: '무보험차 상해 담보를 통한 성공적인 손해 배상.' },
  ],
  zh: [
    { amount: '数百万', type: '赔偿回收', description: '为受重伤的客户获得了数百万美元的经济赔偿。' },
    { amount: '成功', type: '车祸案件', description: '为碰撞受害者争取到了巨额和解金。' },
    { amount: '胜诉', type: '行人伤害', description: '为行人争取到了全额保单限额赔偿。' },
    { amount: '获赔', type: '肇事逃逸', description: '通过未投保驾驶员保险成功追回损失。' },
  ],
  es: [
    { amount: 'Millones', type: 'Recuperados', description: 'Obtuvimos millones de dólares en compensación financiera.' },
    { amount: 'Éxito', type: 'Accidentes de Auto', description: 'Acuerdos significativos asegurados para víctimas.' },
    { amount: 'Ganado', type: 'Lesión Peatonal', description: 'Límites completos de póliza recuperados.' },
    { amount: 'Asegurado', type: 'Atropello y Fuga', description: 'Recuperación exitosa de daños a través de cobertura UM.' },
  ]
};

export const TESTIMONIALS: Record<Language, Testimonial[]> = {
  en: [
    { id: '1', author: 'Andy Nguyen', text: 'I highly recommend this law firm. I was involved in a hit and run accident. The firm helped sort things out with my insurance company. Putting my mind at ease so I could concentrate on my treatment.', rating: 5 },
    { id: '2', author: 'Connie C', text: 'I worked with Attorney Eunyoung Son after a car accident. She impressed me with her professionalism and commitment to ensure win-win results.', rating: 5 },
    { id: '3', author: 'Anh Nguyen', text: 'Eun was professional and helpful for mine and my family\'s accident. She would let us know what the case needed from our end, while keeping us updated.', rating: 5 },
  ],
  ko: [
    { id: '1', author: 'Andy Nguyen', text: '이 로펌을 강력히 추천합니다. 뺑소니 사고를 당했는데 보험사와의 문제를 잘 해결해 주었습니다. 덕분에 치료에만 집중할 수 있었습니다. 감사합니다!', rating: 5 },
    { id: '2', author: 'Connie C', text: '교통사고 후 손은영 변호사님과 함께 일했습니다. 변호사님의 전문성과 윈윈 결과를 위한 헌신에 깊은 인상을 받았습니다.', rating: 5 },
    { id: '3', author: 'Anh Nguyen', text: '변호사님은 저와 제 가족의 사고에 대해 전문적이고 큰 도움을 주셨습니다. 사건 진행 상황을 계속 업데이트해 주셔서 안심할 수 있었습니다.', rating: 5 },
  ],
  zh: [
    { id: '1', author: 'Andy Nguyen', text: '我强烈推荐这家律师事务所。我卷入了一起肇事逃逸事故。律所帮我解决了保险公司的问题，让我能安心治疗。', rating: 5 },
    { id: '2', author: 'Connie C', text: '车祸后我与孙律师合作。她的专业精神和确保双赢结果的承诺给我留下了深刻印象。', rating: 5 },
    { id: '3', author: 'Anh Nguyen', text: '孙律师非常专业，对我及家人的事故提供了很大帮助。她随时让我们了解案件进展。', rating: 5 },
  ],
  es: [
    { id: '1', author: 'Andy Nguyen', text: 'Recomiendo encarecidamente este bufete. Estuve involucrado en un atropello y fuga. El bufete ayudó a resolver las cosas con mi aseguradora.', rating: 5 },
    { id: '2', author: 'Connie C', text: 'Trabajé con la abogada Eunyoung Son después de un accidente. Me impresionó su profesionalismo y compromiso.', rating: 5 },
    { id: '3', author: 'Anh Nguyen', text: 'Eun fue profesional y servicial con el accidente de mi familia. Nos mantenía informados sobre lo que necesitaba el caso.', rating: 5 },
  ]
};