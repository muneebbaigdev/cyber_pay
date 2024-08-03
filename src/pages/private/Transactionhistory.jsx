import React from 'react'

const Transactionhistory = () => {
  return (
    <div className='h-[100vh] bg-slate-900 text-white text-xl text-center pt-20'>
      <table className='mx-auto'>
        <thead>
          <th className='border-2 px-5 w-2/12'>Your Account Number</th>
          <th className='border-2 px-5 w-2/12'>Your Account Name</th>
          <th className='border-2 px-5'>Amount</th>
          <th className='border-2 px-5'>Debit</th>
          <th className='border-2 px-5'>Credit</th>
          <th className='border-2 px-5 w-2/12'>Receiver account Number</th>
          <th className='border-2 px-5 w-2/12'>Receiver Account Name</th>
        </thead>
        <tbody>
          <tr className='text-red-500'>
          <td className='border-b-2 pt-8 px-5 w-2/12'>80880909808</td>
          <td className='border-b-2 pt-8 px-5 w-2/12'>Muneeb Baig</td>
          <td className='border-b-2 pt-8 px-5'>10000</td>
          <td className='border-b-2 pt-8 px-5'>10000</td>
          <td className='border-b-2 pt-8 px-5'>0</td>
          <td className='border-b-2 pt-8 px-5 w-2/12'>898080809809</td>
          <td className='border-b-2 pt-8 px-5 w-2/12'>Ali Munir</td>
          </tr>
          <tr className='text-green-500'>
          <td className='border-b-2 pt-8 px-5 w-2/12'>80880909808</td>
          <td className='border-b-2 pt-8 px-5 w-2/12'>Muneeb Baig</td>
          <td className='border-b-2 pt-8 px-5'>10000</td>
          <td className='border-b-2 pt-8 px-5'>0</td>
          <td className='border-b-2 pt-8 px-5'>10000</td>
          <td className='border-b-2 pt-8 px-5 w-2/12'>898080809809</td>
          <td className='border-b-2 pt-8 px-5 w-2/12'>Ali Munir</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactionhistory
