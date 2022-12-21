import {FC, useState} from 'react'
import classNames from 'classnames'
import DatePicker from 'react-datepicker'

import './FixtureList.scss'
import 'react-datepicker/dist/react-datepicker.css'
import {FixtureHeaderTab} from '../FixtureHeaderTab/FixtureHeaderTab';
import {FixtureTabContent} from '../FixtureTabContent/FixtureTabContent';

type FixtureListProps = {
  /**
   * class for the component
   */
  className?: string
}
export const FixtureList: FC<FixtureListProps> = ({className}) => {

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const [ activeTab, setActiveTab ] = useState('All')

  const fixtureHeaderTab = ['All', 'Live', 'Finished']

  return (
    <div className={classNames('fixture-list', className)}>
      <div className='fixture-list__content'>
        <div className='fixture-list__content-header'>
          <div className='fixture-list__content-header-tabs'>
            {fixtureHeaderTab.map(item => (
              <FixtureHeaderTab
                key={item}
                isActive={activeTab === item}
                onClick={() => setActiveTab(item)}
                className='fixture-list__content-header-tabs-item'
              >
                {item}
              </FixtureHeaderTab>
            ))}
          </div>
          <div className='fixture-list__content-header-calender'>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat='MMMM d, yyyy'
            />
          </div>
        </div>
        {
          fixtureHeaderTab.map(item => (
            <FixtureTabContent key={item} selected={activeTab === item}>
              {item}
            </FixtureTabContent>
          ))
        }
      </div>
    </div>
  )
}
