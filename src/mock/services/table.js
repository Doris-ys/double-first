import Mock from 'mockjs2'
import { builder } from '../util'

//
const universityData = () => {
  return builder([
    { 'project': 'D00大学建设进展(1)',
      'factor': 'D0001建设进展(2)',
      'point': 'D000101大学建设进展情况写实',
      'content': '1.监测点内涵：学校建设目标达成情况和对标达成情况。2.目标达成情况：对照学校公布的“双一流”建设方案中的建设目标，学校2016年以来“双一流”建设的目标完成进展。3.对标达成情况：对照学校确定的与之发展特色、类型等相近的国外世界一流大学标杆院校，学校2016年以来“双一流”建设的对标追赶进展。',
      'explain': '1000字以内'
    },
    { 'value': 8, 'name': 'F2' },
    { 'value': 8, 'name': 'G2' },
    { 'value': 8, 'name': 'G6' },
    { 'value': 8, 'name': 'DataSet' },
    { 'value': 8, 'name': '墨者学院' },
    { 'value': 6, 'name': 'Analysis' },
    { 'value': 6, 'name': 'Data Mining' },
    { 'value': 6, 'name': 'Data Vis' },
    { 'value': 6, 'name': 'Design' },
    { 'value': 6, 'name': 'Grammar' },
    { 'value': 6, 'name': 'Graphics' },
    { 'value': 6, 'name': 'Graph' },
    { 'value': 6, 'name': 'Hierarchy' },
    { 'value': 6, 'name': 'Labeling' },
    { 'value': 6, 'name': 'Layout' },
    { 'value': 6, 'name': 'Quantitative' },
    { 'value': 6, 'name': 'Relation' },
    { 'value': 6, 'name': 'Statistics' },
    { 'value': 6, 'name': '可视化' },
    { 'value': 6, 'name': '数据' },
    { 'value': 6, 'name': '数据可视化' },
    { 'value': 4, 'name': 'Arc Diagram' },
    { 'value': 4, 'name': 'Bar Chart' },
    { 'value': 4, 'name': 'Canvas' }
  ])
}

Mock.mock(/\/api\/table\/university/, 'get', universityData)
