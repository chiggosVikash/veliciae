'use client'
import React from 'react'

const PriceBreakupSection = (matSpecs) => {
  return (
    <div className="mt-8 bg-surface p-6 rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-2xl font-semibold text-onPrimary mb-4">Price Breakup</h2>
      <table className="w-full text-sm text-left text-onSurface">
        <thead className="text-xs text-onPrimary uppercase bg-accent">
          <tr>
            <th scope="col" className="px-6 py-3">Component</th>
            <th scope="col" className="px-6 py-3">Quality</th>
            <th scope="col" className="px-6 py-3">Weight</th>
            <th scope="col" className="px-6 py-3">Discount(% | Flat)</th>
            <th scope="col" className="px-6 py-3">Rate</th>
          </tr>
        </thead>
        <tbody>

          { matSpecs.materialSpecs.map((materialSpec, index) => {
            return (
              <tr key={index} className="bg-surface border-b border-accent">
                <th scope="row" className="px-6 py-4 font-medium text-onPrimary whitespace-nowrap">{materialSpec.materialType}</th>
                <td className="px-6 py-4">{materialSpec.quality}</td>
                <td className="px-6 py-4">{materialSpec.materialWeight}</td>
                <td className="px-6 py-4">{materialSpec.discount}</td>
                <td className="px-6 py-4">₹{materialSpec.price}</td>
              </tr>
            )
          })}
          {/* <tr className="bg-surface border-b border-accent">
            <th scope="row" className="px-6 py-4 font-medium text-onPrimary whitespace-nowrap">Gold</th>
            <td className="px-6 py-4">18</td>
            <td className="px-6 py-4">4.5</td>
            <td className="px-6 py-4">5%</td>
            <td className="px-6 py-4">₹20,000</td>
          </tr>
          <tr className="bg-surface border-b border-accent">
            <th scope="row" className="px-6 py-4 font-medium text-onPrimary whitespace-nowrap">Diamonds</th>
            <td className="px-6 py-4">-</td>
            <td className="px-6 py-4">0.73</td>
            <td className="px-6 py-4">2%</td>
            <td className="px-6 py-4">₹30,000</td>
          </tr>
          <tr className="bg-surface">
            <th scope="row" className="px-6 py-4 font-medium text-onPrimary whitespace-nowrap">Making Charges</th>
            <td className="px-6 py-4">-</td>
            <td className="px-6 py-4">-</td>
            <td className="px-6 py-4">10%</td>
            <td className="px-6 py-4">₹5,000</td>
            
          </tr> */}
        </tbody>
        <tfoot>
          <tr className="font-semibold text-onPrimary bg-accent">
            <th scope="row" className="px-6 py-3 text-base">Total</th>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3"></td>
            <td className="px-6 py-3">₹{matSpecs.finalPrice ?? "NA"}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default PriceBreakupSection
