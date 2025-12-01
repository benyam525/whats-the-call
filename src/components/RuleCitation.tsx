'use client';

interface RuleCitationProps {
  ruling: string;
  ruleReference?: string;
  casebookReference?: string;
}

export function RuleCitation({ ruling, ruleReference, casebookReference }: RuleCitationProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-nba-blue to-blue-700 px-4 py-2">
        <h3 className="font-bold text-white flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          Official Ruling
        </h3>
      </div>

      {/* Ruling text */}
      <div className="p-4">
        <p className="text-gray-800 leading-relaxed">{ruling}</p>
      </div>

      {/* Rule reference - The "aha" moment */}
      {ruleReference && (
        <div className="bg-amber-50 border-t border-amber-100 px-4 py-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📖</span>
            <div className="flex-1">
              <div className="text-sm text-amber-800 font-medium mb-1">
                Rule Reference
              </div>
              <div className="font-bold text-amber-900 text-lg">
                {ruleReference}
              </div>
              {casebookReference && (
                <div className="text-sm text-amber-700 mt-2">
                  📋 {casebookReference}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
