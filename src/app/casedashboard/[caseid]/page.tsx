import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody } from '@/components/MtComponents';
export default function caseDashboard({ params }: { params: { caseid: string } }) {
  const url = process.env.NEXTJS_URL;

  return (
    <div>
      <FontAwesomeIcon icon={faFilePdf} size="5x" style={{ color: '#c3c6d1ff' }} />
      
    </div>
  );
}
