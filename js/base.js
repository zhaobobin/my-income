var baseUrl = 'http://api-account.lisaword.com';

//获取url中"?"符后的字串
function GetRequest() {
  var url = location.search;
  var theRequest = new Object();
  if (url.indexOf('?') != -1) {
    var str = url.substring(1);
    var strs = str.split('&');
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
    }
  }
  return theRequest;
}

// 获取当前月
function getCurrentMonth() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  return year.toString() + month.toString();
}

// 生成日期选项
function getAgoDay(n) {
  var date = new Date();
  var seperator = "";
  var newDate = new Date(date.getTime() - n * 24 * 60 * 60 * 1000);
  var year = newDate.getFullYear();
  var month = newDate.getMonth() + 1;
  var day = newDate.getDate();
  // var en_mon_arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spt", "Oct", "Nov", "Dec"];
  return {
    name: month.toString() + "-" + day.toString(),
    value: year.toString() + seperator + month.toString() + seperator + day.toString()
  };
}

function getAllDays(n) {
  var dayList = [];
  for (var i = n; i > 0; i--) {
    dayList.push(getAgoDay(i));
  }
  return dayList;
}

const mockData = {
  income: {
    diamonds: 1060444,
    diamonds_dollar: 26511,
    golds: 4960,
    golds_dollar: 50,
    wallet_dollar: 0,
    today_data: {
      total_diamonds: 12600,
      total_golds: 0,
      messages: 0,
      call_duration: 8,
      gift_nums: 0,
    },
    agent_name: 'ceshi1',
    agent_phone: '18611112222',
    exchange_text: {
      diamond: ['10,000 ? = $ 2.5'],
      gold: ['10,000 coins = $ 1'],
    },
    contact: 'Contact us:top.server.teamozo@gmail.com',
  },
  incomeRecord: [
    {
      content:
        '<font color="#FF6467">+30000</font><br><font color="#FF6467" size="15px">diamonds</font>',
      create_time: '2023-05-01 07:18:42 uid:330201307',
      title: 'Video chat earns 30000 diamonds with seae',
    },
    {
      content:
        '<font color="#FF6467">+700</font><br><font color="#FF6467" size="15px">diamonds</font>',
      create_time: '2023-05-01 07:12:36 uid:330201307',
      title: 'Video chat earns 700 diamonds with seae',
    },
    {
      content:
        '<font color="#FF6467">+700</font><br><font color="#FF6467" size="15px">diamonds</font>',
      create_time: '2023-05-01 07:18:42 uid:330201307',
      title: 'Video chat earns 700 diamonds with seae',
    },
    {
      content:
        '<font color="#FF6467">+700</font><br><font color="#FF6467" size="15px">diamonds</font>',
      create_time: '2023-05-01 07:12:36 uid:330201307',
      title: 'Video chat earns 700 diamonds with seae',
    },
    {
      content:
        '<font color="#FF6467">+700</font><br><font color="#FF6467" size="15px">diamonds</font>',
      create_time: '2023-05-01 07:18:42 uid:330201307',
      title: 'Video chat earns 700 diamonds with seae',
    },
    {
      content:
        '<font color="#FF6467">+700</font><br><font color="#FF6467" size="15px">diamonds</font>',
      create_time: '2023-05-01 07:12:36 uid:330201307',
      title: 'Video chat earns 700 diamonds with seae',
    },
    {
      content:
        '<font color="#FF6467">+700</font><br><font color="#FF6467" size="15px">diamonds</font>',
      create_time: '2023-05-01 07:18:42 uid:330201307',
      title: 'Video chat earns 700 diamonds with seae',
    },
    {
      content:
        '<font color="#FF6467">+700</font><br><font color="#FF6467" size="15px">diamonds</font>',
      create_time: '2023-05-01 07:12:36 uid:330201307',
      title: 'Video chat earns 700 diamonds with seae',
    },
    {
      content:
        '<font color="#FF6467">+700</font><br><font color="#FF6467" size="15px">diamonds</font>',
      create_time: '2023-05-01 07:18:42 uid:330201307',
      title: 'Video chat earns 700 diamonds with seae',
    },
    {
      content:
        '<font color="#FF6467">+700</font><br><font color="#FF6467" size="15px">diamonds</font>',
      create_time: '2023-05-01 07:12:36 uid:330201307',
      title: 'Video chat earns 700 diamonds with seae',
    },
  ],
  dailyReport: [
    {
      call_duration: 22,
      date: 20230525,
      date_str: '',
      deal_date: '05.25',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 1,
      msg_send_count: 9,
      remark: 'Yesterday',
      task_reward: 0,
      total_diamonds: 38200,
      total_golds: 0,
    },
    {
      call_duration: 15,
      date: 20230524,
      date_str: '',
      deal_date: '05.24',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 1,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 19800,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230523,
      date_str: '',
      deal_date: '05.23',
      gift_nums: 2,
      inv_diamonds: 0,
      messages: 1,
      msg_receive_count: 3,
      msg_send_count: 3,
      remark: '',
      task_reward: 0,
      total_diamonds: 1268,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230522,
      date_str: '',
      deal_date: '05.22',
      gift_nums: 19,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 40,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 13181,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230521,
      date_str: '',
      deal_date: '05.21',
      gift_nums: 32,
      inv_diamonds: 0,
      messages: 32,
      msg_receive_count: 72,
      msg_send_count: 17,
      remark: '',
      task_reward: 0,
      total_diamonds: 26861,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230520,
      date_str: '',
      deal_date: '05.20',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 0,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 0,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230519,
      date_str: '',
      deal_date: '05.19',
      gift_nums: 1,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 5,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 599,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230518,
      date_str: '',
      deal_date: '05.18',
      gift_nums: 3,
      inv_diamonds: 0,
      messages: 4,
      msg_receive_count: 12,
      msg_send_count: 1,
      remark: '',
      task_reward: 0,
      total_diamonds: 1000863,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230517,
      date_str: '',
      deal_date: '05.17',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 1,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 0,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230516,
      date_str: '',
      deal_date: '05.16',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 0,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 0,
      total_golds: 0,
    },
    {
      call_duration: 1,
      date: 20230515,
      date_str: '',
      deal_date: '05.15',
      gift_nums: 1,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 1,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 1299,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230514,
      date_str: '',
      deal_date: '05.14',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 0,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 0,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230513,
      date_str: '',
      deal_date: '05.13',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 0,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 0,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230512,
      date_str: '',
      deal_date: '05.12',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 1,
      msg_send_count: 1,
      remark: '',
      task_reward: 0,
      total_diamonds: 0,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230511,
      date_str: '',
      deal_date: '05.11',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 1,
      msg_receive_count: 1,
      msg_send_count: 20,
      remark: '',
      task_reward: 0,
      total_diamonds: 70,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230510,
      date_str: '',
      deal_date: '05.10',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 1,
      msg_receive_count: 1,
      msg_send_count: 15,
      remark: '',
      task_reward: 0,
      total_diamonds: 63,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230509,
      date_str: '',
      deal_date: '05.09',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 0,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 0,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230508,
      date_str: '',
      deal_date: '05.08',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 0,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 0,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230507,
      date_str: '',
      deal_date: '05.07',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 0,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 0,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230506,
      date_str: '',
      deal_date: '05.06',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 0,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 0,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230505,
      date_str: '',
      deal_date: '05.05',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 2,
      msg_receive_count: 2,
      msg_send_count: 2,
      remark: '',
      task_reward: 0,
      total_diamonds: 540,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230504,
      date_str: '',
      deal_date: '05.04',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 0,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 600,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230503,
      date_str: '',
      deal_date: '05.03',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 0,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 0,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230502,
      date_str: '',
      deal_date: '05.02',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 0,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 0,
      total_golds: 0,
    },
    {
      call_duration: 0,
      date: 20230501,
      date_str: '',
      deal_date: '05.01',
      gift_nums: 0,
      inv_diamonds: 0,
      messages: 0,
      msg_receive_count: 0,
      msg_send_count: 0,
      remark: '',
      task_reward: 0,
      total_diamonds: 1400,
      total_golds: 0,
    },
  ],
  salaryRecord: {
    list: null,
    next_salary_date: '2023-05-30',
    text: [
      '1. The system will cut off for you every week automatically.',
      '2. Your wallet will receive your salary every Thursday.(lt may delay due to holidays)',
      '3. The settlement amount must be >$10 and it should be integer multiple of$10. ',
      'The remainder will be accumulated and cashed out in following settlement cycle',
    ],
    title: 'Settlement Instrutions',
    floor_text: 'Cut off will be processed within 48 hours',
  },
};