import { CSVLink } from 'react-csv'
import { DataType } from '../../utils/types'
type PropType = {
  CSVData: DataType[]
}

const DownloadCSV = ({ CSVData }: PropType) => {
  return (
    <CSVLink data={CSVData}>
      <button>Download CSV</button>
    </CSVLink>
  )
}

export default DownloadCSV
